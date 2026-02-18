import { useState, useEffect } from "react";
import { Users, RefreshCw } from "lucide-react";

interface ServerStatus {
  online: boolean;
  players: { online: number; max: number };
}

export function PlayerCounter() {
  const [status, setStatus] = useState<ServerStatus | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const fetchStatus = async () => {
    setLoading(true);
    setError(false);
    try {
      const res = await fetch("https://api.mcsrvstat.us/3/nightfallnetwork.xyz");
      if (!res.ok) throw new Error();
      const data = await res.json();
      setStatus({
        online: data.online ?? false,
        players: {
          online: data.players?.online ?? 0,
          max: data.players?.max ?? 0,
        },
      });
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchStatus();
    const interval = setInterval(fetchStatus, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center gap-3">
      <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground uppercase tracking-widest">
        <Users className="h-4 w-4" />
        Players Online
      </div>

      <div className="relative flex items-center justify-center">
        {loading ? (
          <div className="flex items-center gap-2 text-primary">
            <RefreshCw className="h-5 w-5 animate-spin" />
            <span className="font-display text-2xl">Connecting...</span>
          </div>
        ) : error ? (
          <div className="flex flex-col items-center gap-1">
            <span className="font-display text-3xl text-muted-foreground">—</span>
            <span className="text-xs text-muted-foreground">Unable to reach server</span>
          </div>
        ) : (
          <div className="flex flex-col items-center gap-1">
            <div className="flex items-baseline gap-1">
              <span className="font-display text-5xl font-bold animate-shimmer">
                {status?.players.online}
              </span>
              {status?.players.max ? (
                <span className="font-display text-2xl text-muted-foreground">
                  /{status.players.max}
                </span>
              ) : null}
            </div>
            <div className="flex items-center gap-1.5">
              <span
                className={`h-2 w-2 rounded-full ${
                  status?.online ? "bg-primary animate-pulse" : "bg-destructive"
                }`}
              />
              <span
                className={`text-xs font-medium uppercase tracking-widest ${
                  status?.online ? "text-primary" : "text-destructive"
                }`}
              >
                {status?.online ? "Server Online" : "Server Offline"}
              </span>
            </div>
          </div>
        )}
      </div>

      <button
        onClick={fetchStatus}
        disabled={loading}
        className="flex items-center gap-1 text-xs text-muted-foreground hover:text-primary transition-colors disabled:opacity-50"
      >
        <RefreshCw className={`h-3 w-3 ${loading ? "animate-spin" : ""}`} />
        Refresh
      </button>
    </div>
  );
}
