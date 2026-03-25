import { Bot, Headphones, MessagesSquare, ShieldCheck, Users, WalletCards } from 'lucide-react'

export const termsSections = [
  { title: '1. Acceptance of Terms', icon: WalletCards, items: ['By accessing and using Sova, you agree to be bound by these Terms and Conditions.', 'If you do not agree, please do not use our services.'] },
  { title: '2. Service Description', icon: MessagesSquare, items: ['Sova provides an AI-powered WhatsApp sales automation platform that helps businesses manage customer conversations, product catalogs, and order processing.'] },
  { title: '3. User Responsibilities', icon: Headphones, items: ['You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.', "You must comply with WhatsApp's Business Policy and Commerce Policy."] },
  { title: '4. Intellectual Property', icon: Bot, items: ['All content, features, and functionality of Sova are owned by us and are protected by international copyright, trademark, and other intellectual property laws.'] },
  { title: '5. Limitation of Liability', icon: ShieldCheck, items: ['Sova shall not be liable for any indirect, incidental, special, or consequential damages resulting from the use or inability to use our services.'] },
  { title: '6. Termination', icon: Users, items: ['We may terminate or suspend your account at any time without prior notice if you breach these Terms.', 'Upon termination, your right to use the service will immediately cease.'] },
  { title: '7. Governing Law', icon: Headphones, items: ['These terms shall be governed by and construed in accordance with the laws of Pakistan, without regard to its conflict of law provisions.'] },
]

export const privacySections = [
  { title: 'Introduction', icon: ShieldCheck, items: ['This Privacy Policy explains how Sova collects, uses, stores, and protects data related to your use of the service.', 'It applies to business owners, team members, and connected messaging interactions processed through the platform.'] },
  { title: 'Data collection', icon: MessagesSquare, items: ['We may collect business contact details, account credentials needed for connection, customer conversation content, metadata, and support messages.', 'We may also collect device, browser, and analytics information to improve performance, reliability, and security.'] },
  { title: 'Data usage', icon: Bot, items: ['Data is used to automate conversations, identify intent, send follow-ups, maintain service quality, and provide customer support.', 'We may use aggregated and de-identified insights to improve the platform without exposing private customer identities.'] },
  { title: 'Security', icon: ShieldCheck, items: ['We use reasonable technical and organizational safeguards to protect stored and processed information.', 'Access to operational data is limited to authorized systems and personnel with a legitimate service need.'] },
  { title: 'User rights', icon: Users, items: ['You may request access to your account information, ask for corrections, or request deletion where legally available.', 'You can contact us to raise questions about processing, retention, or your privacy rights.'] },
]
