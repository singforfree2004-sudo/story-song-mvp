const form = document.querySelector("#intakeForm");
const message = document.querySelector("#formMessage");
const submitButton = document.querySelector("#submitButton");
const config = window.BAZI_REPORT_CONFIG || {};

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

function getFormPayload() {
  const data = new FormData(form);
  return {
    displayName: data.get("displayName"),
    email: data.get("email"),
    gender: data.get("gender"),
    birthDate: data.get("birthDate"),
    birthTime: data.get("birthTime"),
    birthPlace: data.get("birthPlace"),
    question1: data.get("question1"),
    question2: data.get("question2"),
    question3: data.get("question3"),
    questions: [data.get("question1"), data.get("question2"), data.get("question3")],
    consent: data.get("consent") === "on",
    marketingConsent: data.get("marketingConsent") === "on"
  };
}

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
      form.reset();
      setMessage("已送出申請。我們收到資料後，會排盤並製作八字語音摘要，再寄送到你的 Email。");
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
    form.reset();
    setMessage(`已收到申請，案件代號：${result.lead.caseId}。我們會開始製作八字語音摘要。`);
  } catch (error) {
    setMessage(`送出失敗：${error.message}`, true);
  } finally {
    setSubmitting(false);
  }
});
