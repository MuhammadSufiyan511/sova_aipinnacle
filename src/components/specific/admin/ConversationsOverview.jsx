import { AnimatePresence, motion as Motion } from 'framer-motion'
import { Check, MessageSquare, MoreVertical, Search, User, X } from 'lucide-react'
import { useState } from 'react'

const allChats = [
  { id: '1', user: 'Faizan Ahmed', message: 'Hello, what is the price of that jacket?', time: '14:23', status: 'Automated', avatar: 'FA' },
  { id: '2', user: 'Sarah Khan', message: 'Do you have size M available in the blue one?', time: '12:05', status: 'Automated', avatar: 'SK' },
  { id: '3', user: 'Zubair Shah', message: 'I want to place an order for 3 pieces.', time: '09:44', status: 'Lead Captured', avatar: 'ZS' },
  { id: '4', user: 'Nadia Malik', message: 'Can you send the catalog please?', time: 'Yesterday', status: 'Automated', avatar: 'NM' },
  { id: '5', user: 'Bilal Raza', message: 'What are your delivery charges?', time: 'Yesterday', status: 'Automated', avatar: 'BR' },
]

const mockThreads = {
  3: [
    { from: 'user', text: 'I want to place an order for 3 pieces.' },
    { from: 'sova', text: "Great choice! I've noted your order for 3 pieces. May I ask which product you're referring to?" },
    { from: 'user', text: 'The premium silk scarf.' },
    { from: 'sova', text: "Perfect! I'll prepare an invoice for 3x Premium Silk Scarf. Shall I confirm your order?" },
  ],
}

const statusStyles = {
  Automated: 'bg-emerald-50 text-emerald-600',
  'Lead Captured': 'bg-violet-50 text-violet-600',
}

const avatarColors = ['from-emerald-400 to-teal-500', 'from-violet-400 to-purple-500', 'from-amber-400 to-orange-500', 'from-blue-400 to-indigo-500', 'from-rose-400 to-pink-500']

export function ConversationsOverview() {
  const [selected, setSelected] = useState(null)
  const [search, setSearch] = useState('')
  const filtered = allChats.filter((chat) => chat.user.toLowerCase().includes(search.toLowerCase()) || chat.message.toLowerCase().includes(search.toLowerCase()))

  return (
    <Motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="admin-chat-layout flex h-[calc(100vh-6rem)] gap-3 overflow-hidden md:h-[calc(100vh-7.5rem)] lg:h-[calc(100vh-7rem)]">
      <div className={`flex w-full flex-col overflow-hidden rounded-[22px] border border-[#DDEFE7] bg-white shadow-sm transition-all duration-300 lg:w-80 lg:shrink-0 ${selected ? 'hidden lg:flex' : 'flex'}`}>
        <div className="border-b border-[#E8F6EF] p-3.5">
          <div className="mb-3 flex items-center justify-between">
            <h2 className="font-display text-[0.98rem] font-bold text-[#173247] admin-card-title">WhatsApp Inbox</h2>
            <div className="flex items-center gap-1.5 rounded-full bg-emerald-50 px-2 py-0.5 text-[0.6rem] font-bold text-emerald-600 sm:px-2.5 sm:py-1 sm:text-[0.62rem]">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-500" />
              {filtered.length} Active
            </div>
          </div>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#86A29B]" />
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search conversations..."
              className="w-full rounded-xl border border-[#DDEFE7] bg-[#F2FBF7] py-2 pl-9 pr-4 text-[0.78rem] text-[#295565] placeholder-[#86A29B] outline-none transition focus:border-emerald-400 focus:bg-white"
            />
          </div>
        </div>

        <div className="flex-1 overflow-y-auto">
          <AnimatePresence>
            {filtered.map((chat, i) => (
              <Motion.button
                key={chat.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: i * 0.04 }}
                onClick={() => setSelected(chat)}
                className={`flex w-full items-center gap-3 border-b border-[#EFF8F4] px-3.5 py-3 text-left transition ${selected?.id === chat.id ? 'bg-emerald-50' : 'hover:bg-[#F2FBF7]'}`}
              >
                <div className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gradient-to-br ${avatarColors[i % avatarColors.length]} text-[0.66rem] font-bold text-white shadow`}>
                  {chat.avatar}
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center justify-between gap-2">
                    <p className="text-[0.8rem] font-bold text-[#173247]">{chat.user}</p>
                    <span className="text-[0.62rem] text-[#6D8A88]">{chat.time}</span>
                  </div>
                  <p className="mt-0.5 truncate text-[0.72rem] text-[#62808D]">{chat.message}</p>
                </div>
              </Motion.button>
            ))}
          </AnimatePresence>
        </div>
      </div>

      <div className={`flex-1 flex-col overflow-hidden rounded-[22px] border border-[#DDEFE7] bg-white shadow-sm lg:flex ${selected ? 'flex' : 'hidden'}`}>
        {selected ? (
          <>
            <div className="flex items-center justify-between border-b border-[#E8F6EF] px-3 py-2.5 sm:px-4 sm:py-3">
              <div className="flex items-center gap-2.5 sm:gap-3">
                <button onClick={() => setSelected(null)} className="rounded-full p-1.5 text-[#62808D] hover:bg-[#F2FBF7] lg:hidden">
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <div className={`flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br ${avatarColors[allChats.findIndex((chat) => chat.id === selected.id) % avatarColors.length]} text-[0.66rem] font-bold text-white shadow`}>
                  {selected.avatar}
                </div>
                <div>
                  <p className="text-[0.84rem] font-bold text-[#173247]">{selected.user}</p>
                  <span className={`rounded-full px-2 py-0.5 text-[0.6rem] font-bold ${statusStyles[selected.status]}`}>{selected.status}</span>
                </div>
              </div>
              <div className="flex items-center gap-1">
                <button className="rounded-full p-2 text-[#62808D] hover:bg-[#F2FBF7]"><MoreVertical className="h-4 w-4" /></button>
                <button onClick={() => setSelected(null)} className="rounded-full p-2 text-[#62808D] hover:bg-[#F2FBF7]"><X className="h-4 w-4" /></button>
              </div>
            </div>

            <div className="flex-1 space-y-3 overflow-y-auto p-4 admin-chat-container">
              {(mockThreads[selected.id] || [
                { from: 'user', text: selected.message },
                { from: 'sova', text: "Hi! Thanks for reaching out. I'm SOVA, your sales assistant. How can I help you today?" }
              ]).map((msg, i) => (
                <div key={i} className={`flex ${msg.from === 'user' ? 'justify-end' : 'justify-start'} admin-msg-row`}>
                  <div className={`max-w-[75%] rounded-2xl px-3.5 py-2.5 text-[0.8rem] leading-5 admin-chat-bubble ${
                    msg.from === 'user' 
                      ? 'rounded-br-sm bg-emerald-500 text-white is-user' 
                      : 'rounded-bl-sm bg-[#F2FBF7] text-[#295565] is-sova'
                    }`}
                  >
                    {msg.from === 'sova' ? <p className="mb-1 text-[0.58rem] font-bold uppercase tracking-[0.12em] text-[#6D8A88] admin-bubble-label">SOVA AI</p> : null}
                    {msg.text}
                  </div>
                </div>
              ))}
            </div>
          </>
        ) : (
          <div className="flex flex-1 flex-col items-center justify-center gap-3 text-center admin-empty-state">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#F2FBF7] admin-empty-icon">
              <MessageSquare className="h-6 w-6 text-[#86A29B]" />
            </div>
            <p className="text-[0.84rem] font-bold text-[#62808D]">Select a conversation to view it</p>
          </div>
        )}
      </div>
    </Motion.div>
  )
}
