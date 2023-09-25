import { useState } from "react";

export default function PasswordDisplay({ password }) {
  console.log({ password });
  const [copied, setCopied] = useState(false);

  const handleCopyText = () => {
    navigator.clipboard.writeText(password);
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 1000);
  };
  return (
    <div className="PasswordDisplay">
      <div className="Password" id="content">
        {password}
      </div>
      <button className="Copy" onClick={handleCopyText}>
        {copied ? "Copied" : "Copy"}
      </button>
    </div>
  );
}
