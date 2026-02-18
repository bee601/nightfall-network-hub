import { useState } from "react";
import { Copy, Check } from "lucide-react";

const SERVER_IP = "nightfallnetwork.xyz";

export function IPCopyButton() {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(SERVER_IP);
    } catch {
      // Fallback
      const el = document.createElement("textarea");
      el.value = SERVER_IP;
      document.body.appendChild(el);
      el.select();
      document.execCommand("copy");
      document.body.removeChild(el);
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <button
      onClick={handleCopy}
      className="group relative flex items-center gap-3 rounded-lg border-glow bg-card px-6 py-3 transition-all duration-300 hover:bg-muted hover:glow-primary"
      style={{
        background: "hsl(var(--card))",
        border: "1px solid hsl(var(--primary) / 0.3)",
      }}
    >
      <div className="flex flex-col items-start">
        <span className="text-xs text-muted-foreground uppercase tracking-widest mb-0.5">
          Server IP
        </span>
        <span className="font-display text-lg font-semibold text-foreground tracking-wide">
          {SERVER_IP}
        </span>
      </div>
      <div
        className={`ml-2 flex h-8 w-8 items-center justify-center rounded-md transition-all duration-300 ${
          copied
            ? "bg-primary/20 text-primary"
            : "bg-muted text-muted-foreground group-hover:bg-primary/20 group-hover:text-primary"
        }`}
      >
        {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
      </div>
      {copied && (
        <span className="absolute -top-8 left-1/2 -translate-x-1/2 rounded bg-primary px-2 py-0.5 text-xs font-medium text-primary-foreground whitespace-nowrap">
          Copied!
        </span>
      )}
    </button>
  );
}
