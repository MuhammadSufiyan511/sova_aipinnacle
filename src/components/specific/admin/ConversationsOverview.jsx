import { AnimatePresence, motion as Motion } from 'framer-motion'
import { Check, ChevronLeft, MessageSquare, MoreVertical, Search, X } from 'lucide-react'
import { useState, memo } from 'react'
import { useTranslation } from 'react-i18next'

const avatarColors = ['from-emerald-400 to-teal-500', 'from-violet-400 to-purple-500', 'from-amber-400 to-orange-500', 'from-blue-400 to-indigo-500', 'from-rose-400 to-pink-500']

export const ConversationsOverview = memo(function ConversationsOverview() {
  const { t } = useTranslation()
  const [selected, setSelected] = useState(null)
  const [search, setSearch] = useState('')

  const mockChats = t('admin.mockData.chats', { returnObjects: true }) || []
  const mockThreads = t('admin.mockData.threads', { returnObjects: true }) || {}

  const allChats = mockChats.map((chat, i) => ({
    ...chat,
    id: String(i + 1),
    statusKey: (i + 1) === 3 ? 'captured' : 'automated',
    avatar: chat.user.split(' ').map((n) => n[0]).join('').toUpperCase(),
  }))
  
  const statusStyles = {
    automated: 'admin-chat-status bg-emerald-50 text-emerald-600',
    captured: 'admin-chat-status bg-violet-50 text-violet-600',
  }

  const filtered = allChats.filter((chat) => chat.user.toLowerCase().includes(search.toLowerCase()) || chat.message.toLowerCase().includes(search.toLowerCase()))

  return (
    <Motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="admin-chat-layout flex h-[calc(100vh-6rem)] gap-3 overflow-hidden md:h-[calc(100vh-7.5rem)] lg:h-[calc(100vh-7rem)]">
      <div className={`admin-chat-sidebar flex w-full flex-col overflow-hidden rounded-[22px] border border-[#DDEFE7] bg-white shadow-sm transition-all duration-300 lg:w-80 lg:shrink-0 ${selected ? 'hidden lg:flex' : 'flex'}`}>
        <div className="admin-chat-toolbar border-b border-[#E8F6EF] p-3.5">
          <div className="mb-3 flex items-center justify-between">
            <h2 className="font-display text-[0.98rem] font-bold text-[#173247] admin-card-title">{t('admin.chat.title')}</h2>
            <div className="flex items-center gap-1.5 rounded-full bg-emerald-50 px-2 py-0.5 text-[0.6rem] font-bold text-emerald-600 sm:px-2.5 sm:py-1 sm:text-[0.62rem]">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-500" />
              {filtered.length} {t('admin.chat.activeStatus')}
            </div>
          </div>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#86A29B]" />
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder={t('admin.chat.searchPlaceholder')}
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
                className={`flex w-full items-start gap-3 border-b border-[#EFF8F4] px-3.5 py-3 text-left transition ${
                  selected?.id === chat.id ? 'bg-emerald-50' : 'hover:bg-[#F2FBF7]'
                }`}
              >
                <div className={`mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br ${avatarColors[i % avatarColors.length]} text-[0.66rem] font-bold text-white shadow`}>
                  {chat.avatar}
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-start justify-between gap-2">
                    <p className="truncate pr-2 text-[0.82rem] font-bold text-[#173247]">{chat.user}</p>
                    <span className="shrink-0 text-[0.62rem] font-semibold text-[#6D8A88]">{chat.time}</span>
                  </div>
                  <p className="mt-1 line-clamp-2 text-[0.74rem] leading-5 text-[#62808D]">{chat.message}</p>
                  <div className="mt-2 flex items-center gap-2">
                    <span className={`rounded-full px-2 py-0.5 text-[0.58rem] font-bold uppercase tracking-[0.08em] ${statusStyles[chat.statusKey]}`}>
                      {t(`admin.chat.status.${chat.statusKey}`)}
                    </span>
                  </div>
                </div>
              </Motion.button>
            ))}
          </AnimatePresence>
        </div>
      </div>

      <div className={`admin-chat-pane flex-1 flex-col overflow-hidden rounded-[22px] border border-[#DDEFE7] bg-white shadow-sm lg:flex ${selected ? 'flex' : 'hidden'}`}>
        {selected ? (
          <>
            <div className="admin-chat-pane-header flex items-center justify-between border-b border-[#E8F6EF] px-3 py-2.5 sm:px-4 sm:py-3">
              <div className="flex items-center gap-2.5 sm:gap-3">
                <button onClick={() => setSelected(null)} className="admin-chat-icon-btn rounded-full p-1.5 text-[#62808D] hover:bg-[#F2FBF7] lg:hidden">
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <div className={`flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br ${avatarColors[allChats.findIndex((chat) => chat.id === selected.id) % avatarColors.length]} text-[0.66rem] font-bold text-white shadow`}>
                  {selected.avatar}
                </div>
                <div>
                  <p className="text-[0.84rem] font-bold text-[#173247]">{selected.user}</p>
                  <span className={`rounded-full px-2 py-0.5 text-[0.6rem] font-bold ${statusStyles[selected.statusKey]}`}>
                    {t(`admin.chat.status.${selected.statusKey}`)}
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-1">
                <button className="admin-chat-icon-btn rounded-full p-2 text-[#62808D] hover:bg-[#F2FBF7]"><MoreVertical className="h-4 w-4" /></button>
                <button onClick={() => setSelected(null)} className="admin-chat-icon-btn rounded-full p-2 text-[#62808D] hover:bg-[#F2FBF7]"><X className="h-4 w-4" /></button>
              </div>
            </div>

            <div className="admin-chat-container flex-1 overflow-y-auto bg-[linear-gradient(180deg,#F8FFFC_0%,#F2FBF7_100%)] p-4">
              <div className="admin-chat-preview-pill mx-auto mb-4 flex w-fit items-center gap-2 rounded-full border border-[#DDEFE7] bg-white/90 px-3 py-1 text-[0.62rem] font-semibold text-[#10B981] shadow-sm">
                <span className="h-1.5 w-1.5 rounded-full bg-[#10B981]" />
                {t('admin.chat.previewLabel')}
              </div>
              {(mockThreads[selected.id] || [
                { from: 'user', text: selected.message },
                { from: 'sova', text: t('admin.chat.defaultReply') }
              ]).map((msg, i) => {
                const bubbleTime = selected.time || '12:05'
                const sender = msg.from === 'user' ? 'user' : 'sova'

                return (
                  <div key={i} className={`mb-3 flex ${sender === 'user' ? 'justify-end' : 'justify-start'} admin-msg-row`}>
                    <div
                      className={`max-w-[82%] rounded-[18px] px-3.5 py-2.5 text-[0.8rem] leading-5 shadow-sm admin-chat-bubble ${
                        sender === 'user'
                          ? 'rounded-br-[6px] border border-[#B7F0D5] bg-[#DCF8C6] text-[#173247] is-user'
                          : 'rounded-bl-[6px] border border-[#DDEFE7] bg-white text-[#295565] is-sova'
                      }`}
                    >
                      {sender === 'sova' ? (
                        <div className="mb-1.5 flex items-center gap-1.5">
                          <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-[#ECFDF5] text-[0.52rem] font-extrabold uppercase tracking-[0.08em] text-[#10B981]">
                            AI
                          </span>
                          <p className="text-[0.58rem] font-bold uppercase tracking-[0.12em] text-[#10B981] admin-bubble-label">
                            {t('admin.chat.sovaLabel')}
                          </p>
                        </div>
                      ) : (
                        <p className="mb-1.5 text-[0.58rem] font-bold uppercase tracking-[0.12em] text-[#1E293B] admin-bubble-label">
                          {selected.user}
                        </p>
                      )}
                      <p>{msg.text}</p>
                      <div className={`mt-1.5 flex items-center gap-1 text-[0.58rem] ${sender === 'user' ? 'justify-end text-[#5F7A73]' : 'justify-end text-[#86A29B]'}`}>
                        <span>{bubbleTime}</span>
                        {sender === 'user' ? <Check className="h-3.2 w-3.2 text-[#10B981]" /> : null}
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </>
        ) : (
          <div className="flex flex-1 flex-col items-center justify-center gap-3 text-center admin-empty-state">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#F2FBF7] admin-empty-icon">
              <MessageSquare className="h-6 w-6 text-[#86A29B]" />
            </div>
            <p className="text-[0.84rem] font-bold text-[#62808D]">{t('admin.chat.emptyState')}</p>
          </div>
        )}
      </div>
    </Motion.div>
  )
})
