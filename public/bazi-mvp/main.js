const form = document.querySelector("#intakeForm");
const message = document.querySelector("#formMessage");
const submitButton = document.querySelector("#submitButton");
const birthTimeInput = form.querySelector('[name="birthTime"]');
const unknownBirthTimeInput = form.querySelector('[name="unknownBirthTime"]');
const wantsPaidInput = form.querySelector('[name="wantsPaid"]');
const buyFullReportButton = document.querySelector("#buyFullReport");
const sampleAudio = document.querySelector("#sampleAudio");
const config = window.BAZI_REPORT_CONFIG || {};
let formStartTracked = false;
let samplePlayTracked = false;

function setMessage(text, isError = false) {
  message.textContent = text;
  message.classList.toggle("error", isError);
}

function setSubmitting(isSubmitting) {
  submitButton.disabled = isSubmitting;
  submitButton.querySelector("span").textContent = isSubmitting ? "送出中..." : "送出申請";
}

function getApiUrl() {
  return config.apiUrl || "/api/leads";
}

function isExternalApi(url) {
  return /^https?:\/\//.test(url);
}

function trackEvent(name) {
  if (typeof window.plausible === "function") {
    window.plausible(name);
  }
}

function getFormPayload() {
  const data = new FormData(form);
  const unknownBirthTime = data.get("unknownBirthTime") === "on";
  return {
    displayName: data.get("displayName"),
    email: data.get("email"),
    gender: data.get("gender"),
    birthDate: data.get("birthDate"),
    birthTime: unknownBirthTime ? "unknown" : data.get("birthTime"),
    unknownBirthTime,
    birthPlace: data.get("birthPlace"),
    question1: data.get("question1"),
    question2: data.get("question2"),
    question3: data.get("question3"),
    questions: [data.get("question1"), data.get("question2"), data.get("question3")],
    consent: data.get("consent") === "on",
    marketingConsent: data.get("marketingConsent") === "on",
    wantsPaid: data.get("wantsPaid") === "on"
  };
}

function renderSuccess(payload, caseId = "") {
  form.innerHTML = `
    <div class="success-panel" role="status" tabindex="-1">
      <h3>申請已送出</h3>
      <p>你的語音摘要正在製作中，24 小時內會寄到 <strong>${payload.email}</strong>。</p>
      ${caseId ? `<p>案件代號：<strong>${caseId}</strong></p>` : ""}
      <p>收不到信時請檢查垃圾信件匣，或來信 clearflowdigital.tw@gmail.com。</p>
      <p>小提醒：免費 demo 會先確認你的命盤資料，再快速講性格、工作財運、2026 重點與感情伏筆。</p>
      <p>想聽完整的過去驗證、未來五年與感情財運分析，回信告訴我們「我要升級完整版」即可（NT$199）。</p>
    </div>
  `;
  const panel = form.querySelector(".success-panel");
  panel.focus();
}

unknownBirthTimeInput.addEventListener("change", () => {
  const isUnknown = unknownBirthTimeInput.checked;
  birthTimeInput.required = !isUnknown;
  birthTimeInput.disabled = isUnknown;
  if (isUnknown) birthTimeInput.value = "";
});

form.addEventListener("focusin", () => {
  if (formStartTracked) return;
  formStartTracked = true;
  trackEvent("form_start");
});

sampleAudio.addEventListener("play", () => {
  if (samplePlayTracked) return;
  samplePlayTracked = true;
  trackEvent("sample_play");
});

buyFullReportButton.addEventListener("click", () => {
  wantsPaidInput.checked = true;
  document.querySelector("#free-report").scrollIntoView({ behavior: "smooth", block: "start" });
  trackEvent("paid_interest");
});

form.addEventListener("submit", async event => {
  event.preventDefault();
  setSubmitting(true);
  setMessage("正在送出資料，請稍候。");

  try {
    const payload = getFormPayload();
    const apiUrl = getApiUrl();

    if (isExternalApi(apiUrl)) {
      await fetch(apiUrl, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "text/plain;charset=utf-8" },
        body: JSON.stringify(payload)
      });
      trackEvent("form_submit");
      if (payload.wantsPaid) trackEvent("paid_interest");
      renderSuccess(payload);
      return;
    }

    const response = await fetch(apiUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });
    const result = await response.json();
    if (!response.ok) {
      setMessage((result.errors || [result.error || "送出失敗，請稍後再試。"]).join(" "), true);
      return;
    }
    trackEvent("form_submit");
    if (payload.wantsPaid) trackEvent("paid_interest");
    renderSuccess(payload, result.lead.caseId);
  } catch (error) {
    setMessage(`送出失敗：${error.message}`, true);
  } finally {
    if (document.body.contains(submitButton)) {
      setSubmitting(false);
    }
  }
});
