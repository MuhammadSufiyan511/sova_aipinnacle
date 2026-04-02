import { AnimatePresence, motion } from 'framer-motion'
import { Check, MessageSquare, MoreVertical, Search, User, X } from 'lucide-react'
import { useState } from 'react'

const allChats = [
  { id: '1', user: 'Faizan Ahmed', message: 'Hello, what is the price of that jacket?', time: '14:23', status: 'Automated', avatar: 'FA', tone: 'Professional' },
  { id: '2', user: 'Sarah Khan', message: 'Do you have size M available in the blue one?', time: '12:05', status: 'Automated', avatar: 'SK', tone: 'Friendly' },
  { id: '3', user: 'Zubair Shah', message: 'I want to place an order for 3 pieces.', time: '09:44', status: 'Lead Captured', avatar: 'ZS', tone: 'Professional' },
  { id: '4', user: 'Nadia Malik', message: 'Can you send the catalog please?', time: 'Yesterday', status: 'Automated', avatar: 'NM', tone: 'Friendly' },
  { id: '5', user: 'Bilal Raza', message: 'What are your delivery charges?', time: 'Yesterday', status: 'Automated', avatar: 'BR', tone: 'Direct' },
]

const mockThreads = {
  '3': [
    { from: 'user', text: 'I want to place an order for 3 pieces.' },
    { from: 'sova', text: 'Great choice! I\'ve noted your order for 3 pieces. May I ask which product you\'re referring to?' },
    { from: 'user', text: 'The premium silk scarf.' },
    { from: 'sova', text: 'Perfect! I\'ll prepare an invoice for 3x Premium Silk Scarf. Shall I confirm your order?' },
  ]
}

const statusStyles = {
  'Automated': 'bg-emerald-50 text-emerald-600',
  'Lead Captured': 'bg-violet-50 text-violet-600',
}

const avatarColors = ['from-emerald-400 to-teal-500', 'from-violet-400 to-purple-500', 'from-amber-400 to-orange-500', 'from-blue-400 to-indigo-500', 'from-rose-400 to-pink-500']

export function ConversationsOverview() {
  const [selected, setSelected] = useState(null)
  const [search, setSearch] = useState('')
  const filtered = allChats.filter(c => c.user.toLowerCase().includes(search.toLowerCase()) || c.message.toLowerCase().includes(search.toLowerCase()))

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex h-[calc(100vh-8rem)] gap-4 overflow-hidden">
      {/* Chat List Panel */}
      <div className="flex w-full flex-col overflow-hidden rounded-[24px] border border-[#E2EFEA] bg-white shadow-sm lg:w-96 lg:shrink-0">
        <div className="border-b border-[#F1F5F9] p-4">
          <div className="mb-3 flex items-center justify-between">
            <h2 className="font-display text-[1.05rem] font-bold text-slate-800">WhatsApp Inbox</h2>
            <div className="flex items-center gap-1.5 rounded-full bg-emerald-50 px-2.5 py-1 text-[0.65rem] font-bold text-emerald-600">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-500" />
              {filtered.length} Active
            </div>
          </div>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-300" />
            <input value={search} onChange={e => setSearch(e.target.value)}
              placeholder="Search conversations…"
              className="w-full rounded-xl border border-slate-100 bg-slate-50 py-2 pl-9 pr-4 text-[0.84rem] text-slate-700 placeholder-slate-300 outline-none transition focus:border-emerald-400 focus:bg-white" />
          </div>
        </div>
        <div className="flex-1 overflow-y-auto">
          <AnimatePresence>
            {filtered.map((chat, i) => (
              <motion.button key={chat.id} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: i * 0.05 }}
                onClick={() => setSelected(chat)}
                className={`flex w-full items-center gap-3 border-b border-[#F8FAFC] px-4 py-3.5 text-left transition ${selected?.id === chat.id ? 'bg-emerald-50' : 'hover:bg-slate-50'}`}
              >
                <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br ${avatarColors[i % avatarColors.length]} text-[0.7rem] font-bold text-white shadow`}>
                  {chat.avatar}
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center justify-between">
                    <p className="text-[0.87rem] font-bold text-slate-800">{chat.user}</p>
                    <span className="text-[0.65rem] text-slate-400">{chat.time}</span>
                  </div>
                  <p className="mt-0.5 truncate text-[0.78rem] text-slate-500">{chat.message}</p>
                </div>
              </motion.button>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Chat Detail Panel */}
      <div className="hidden flex-1 flex-col overflow-hidden rounded-[24px] border border-[#E2EFEA] bg-white shadow-sm lg:flex">
        {selected ? (
          <>
            <div className="flex items-center justify-between border-b border-[#F1F5F9] px-5 py-4">
              <div className="flex items-center gap-3">
                <div className={`flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br ${avatarColors[allChats.findIndex(c=>c.id===selected.id) % avatarColors.length]} text-[0.7rem] font-bold text-white shadow`}>{selected.avatar}</div>
                <div>
                  <p className="text-[0.92rem] font-bold text-slate-800">{selected.user}</p>
                  <span className={`rounded-full px-2 py-0.5 text-[0.62rem] font-bold ${statusStyles[selected.status]}`}>{selected.status}</span>
                </div>
              </div>
              <div className="flex items-center gap-1">
                <button className="rounded-full p-2 text-slate-400 hover:bg-slate-50"><MoreVertical className="h-4 w-4" /></button>
                <button onClick={() => setSelected(null)} className="rounded-full p-2 text-slate-400 hover:bg-slate-50"><X className="h-4 w-4" /></button>
              </div>
            </div>
            <div className="flex-1 overflow-y-auto space-y-3 p-5">
              {(mockThreads[selected.id] || [{ from: 'user', text: selected.message }, { from: 'sova', text: `Hi! Thanks for reaching out. I'm SOVA, your sales assistant. How can I help you today?` }]).map((msg, i) => (
                <div key={i} className={`flex ${msg.from === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[75%] rounded-2xl px-4 py-2.5 text-[0.85rem] leading-relaxed ${msg.from === 'user' ? 'rounded-br-sm bg-emerald-500 text-white' : 'rounded-bl-sm bg-slate-100 text-slate-700'}`}>
                    {msg.from === 'sova' && <p className="mb-1 text-[0.62rem] font-bold uppercase tracking-wider text-slate-400">SOVA AI</p>}
                    {msg.text}
                  </div>
                </div>
              ))}
            </div>
            <div className="border-t border-[#F1F5F9] p-4">
              <div className="flex items-center gap-2 rounded-xl border border-slate-100 bg-slate-50 px-4 py-2.5">
                <MessageSquare className="h-4 w-4 text-slate-300" />
                <p className="flex-1 text-[0.82rem] text-slate-400">SOVA is handling this conversation automatically…</p>
                <span className={`rounded-full px-2 py-0.5 text-[0.62rem] font-bold ${statusStyles[selected.status]}`}>
                  {selected.status === 'Automated' ? <Check className="inline h-3 w-3 mr-0.5" /> : <User className="inline h-3 w-3 mr-0.5" />}
                  {selected.status}
                </span>
              </div>
            </div>
          </>
        ) : (
          <div className="flex flex-1 flex-col items-center justify-center gap-3 text-center">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-50">
              <MessageSquare className="h-7 w-7 text-slate-300" />
            </div>
            <p className="text-[0.92rem] font-bold text-slate-400">Select a conversation to view it</p>
          </div>
        )}
      </div>
    </motion.div>
  )
}
