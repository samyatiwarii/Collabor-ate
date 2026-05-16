"use client";
import { useState } from "react";
import { conversations } from "@/data";
import { cn } from "@/lib/utils";
import { Send, Search } from "lucide-react";

export default function InfluencerMessages() {
  const [activeId, setActiveId] = useState(conversations[0].id);
  const [input, setInput] = useState("");
  const [localConvs, setLocalConvs] = useState(conversations);

  const active = localConvs.find((c) => c.id === activeId)!;

  const sendMessage = () => {
    if (!input.trim()) return;
    setLocalConvs((prev) =>
      prev.map((c) =>
        c.id === activeId
          ? {
              ...c,
              lastMessage: input,
              lastTimestamp: "Just now",
              messages: [...c.messages, { id: Date.now().toString(), senderId: "me", senderName: "Priya Arora", senderInitials: "PA", content: input, timestamp: "Just now", isOwn: true }],
            }
          : c
      )
    );
    setInput("");
    setTimeout(() => {
      setLocalConvs((prev) =>
        prev.map((c) =>
          c.id === activeId
            ? { ...c, lastMessage: "Thanks! We'll get back to you shortly.", messages: [...c.messages, { id: (Date.now() + 1).toString(), senderId: "them", senderName: active.participantName, senderInitials: active.participantInitials, content: "Thanks! We'll get back to you shortly.", timestamp: "Just now", isOwn: false }] }
            : c
        )
      );
    }, 1200);
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="w-72 border-r border-surface-border bg-white flex flex-col">
        <div className="p-4 border-b border-surface-border">
          <h2 className="font-heading font-semibold text-sm text-ink mb-3">Messages</h2>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-ink-muted" />
            <input className="w-full h-8 pl-8 pr-3 text-xs border border-surface-border2 rounded-lg bg-surface outline-none focus:border-brand-400 focus:ring-1 focus:ring-brand-100" placeholder="Search messages..." />
          </div>
        </div>
        <div className="flex-1 overflow-y-auto">
          {localConvs.map((conv) => (
            <button key={conv.id} onClick={() => setActiveId(conv.id)} className={cn("w-full flex items-start gap-3 px-4 py-3.5 border-b border-surface-border text-left hover:bg-surface transition-colors", activeId === conv.id && "bg-brand-50 border-l-2 border-l-brand-500")}>
              <div className={cn("w-9 h-9 rounded-xl flex items-center justify-center text-xs font-bold font-heading flex-shrink-0", conv.participantColor)}>{conv.participantInitials}</div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-semibold text-ink truncate">{conv.participantName}</p>
                  <p className="text-[10px] text-ink-muted flex-shrink-0 ml-1">{conv.lastTimestamp}</p>
                </div>
                <p className="text-xs text-ink-muted truncate mt-0.5">{conv.lastMessage}</p>
              </div>
              {conv.unread > 0 && (
                <span className="w-4 h-4 rounded-full bg-brand-600 text-white text-[9px] font-bold flex items-center justify-center flex-shrink-0 mt-0.5">{conv.unread}</span>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Chat window */}
      <div className="flex-1 flex flex-col bg-surface">
        <div className="h-14 px-5 bg-white border-b border-surface-border flex items-center gap-3">
          <div className={cn("w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold font-heading", active.participantColor)}>{active.participantInitials}</div>
          <div>
            <p className="text-sm font-semibold text-ink">{active.participantName}</p>
            <p className="text-xs text-emerald-500 font-medium">Online</p>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-5 space-y-3">
          {active.messages.map((msg) => (
            <div key={msg.id} className={cn("flex", msg.isOwn ? "justify-end" : "justify-start")}>
              {!msg.isOwn && (
                <div className={cn("w-6 h-6 rounded-lg flex items-center justify-center text-[10px] font-bold font-heading mr-2 flex-shrink-0 mt-auto", active.participantColor)}>{msg.senderInitials}</div>
              )}
              <div className={cn("max-w-[68%] px-4 py-2.5 rounded-2xl text-sm leading-relaxed", msg.isOwn ? "bg-brand-600 text-white rounded-br-md" : "bg-white border border-surface-border text-ink rounded-bl-md shadow-card")}>
                {msg.content}
              </div>
            </div>
          ))}
        </div>

        <div className="p-4 bg-white border-t border-surface-border">
          <div className="flex gap-2 items-center">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
              placeholder="Type a message..."
              className="flex-1 h-10 px-4 text-sm border border-surface-border2 rounded-xl bg-surface outline-none focus:border-brand-400 focus:ring-2 focus:ring-brand-100 transition-all"
            />
            <button onClick={sendMessage} className="w-10 h-10 rounded-xl bg-brand-600 text-white flex items-center justify-center hover:bg-brand-700 transition-colors">
              <Send className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
