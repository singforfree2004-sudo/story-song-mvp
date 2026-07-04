const form = document.querySelector("#intakeForm");
const message = document.querySelector("#formMessage");
const config = window.BAZI_MVP_CONFIG || {};

function setMessage(text, isError = false) {
  message.textContent = text;
  message.classList.toggle("error", isError);
}

function getApiUrl() {
  return config.apiUrl || "/api/leads";
}

function isExternalApi(url) {
  return /^https?:\/\//.test(url);
}

form.addEventListener("submit", async event => {
  event.preventDefault();
  setMessage("送出中...");

  const data = new FormData(form);
  const payload = {
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

  try {
    const apiUrl = getApiUrl();
    if (isExternalApi(apiUrl)) {
      await fetch(apiUrl, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "text/plain;charset=utf-8" },
        body: JSON.stringify(payload)
      });
      form.reset();
      setMessage("已送出申請。請回到對話裡告訴我們已填好，我們會讀取測試資料並製作交付信。");
      return;
    }

    const response = await fetch(apiUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });
    const result = await response.json();
    if (!response.ok) {
      setMessage((result.errors || [result.error || "送出失敗"]).join(" "), true);
      return;
    }
    form.reset();
    setMessage(`已收到申請，案件代號：${result.lead.caseId}。MVP 後台已建立案件。`);
  } catch (error) {
    setMessage(`送出失敗：${error.message}`, true);
  }
});
