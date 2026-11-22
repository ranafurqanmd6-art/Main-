/**
 * Global Configuration for WhatsApp MD Bot
 */

module.exports = {
    // Bot Owner Configuration
    ownerNumber: ['923003719761'], // Owner number without + or spaces
    ownerName: ['RANA FURQAN'], // Owner names corresponding to ownerNumber array
    
    // Bot Configuration
    botName: 'MERI 💋 JAAN',
    prefix: '.',
    sessionName: 'session',
    // Paste DEX~<payload> here when configuring from this file.
    // SESSION_ID takes precedence when supplied by the hosting environment.
    sessionID: process.env.SESSION_ID || '',
    // Digits only, including country code; used only when DEX~ is missing/invalid.
    pairingNumber: process.env.PAIRING_NUMBER || '',
    connectionNotifyEnabled: true,
    developerName: 'RANA FURQAN',
    githubUrl: 'https://github.com/Dexsam07/As-zara-mini', // original open-source project
    newsletterJid: '', // Newsletter JID for menu forwarding
    updateZipUrl: '', // Left empty so .update never overwrites your customized bot
    
    // Sticker Configuration
    packname: 'MERI 💋 JAAN',
    
    // Bot Behavior
    selfMode: false, // Private mode - only owner can use commands
    autoRead: false,
    autoTyping: false,
    autoBio: false,
    autoSticker: false,
    autoReact: false,
    autoReactMode: 'target', // target, bot, or all
    autoReactTarget: process.env.AUTOREACT_TARGET || '', // one number; digits with country code
    autoReactEmojiMode: 'random', // random or fixed
    autoReactFixedEmoji: '❤️',
    autoDownload: false,
    
    // Group Settings Defaults
    defaultGroupSettings: {
      antilink: false,
      antilinkAction: 'delete', // 'delete', 'kick', 'warn'
      antitag: false,
      antitagAction: 'delete',
      antiall: false, // Owner only - blocks all messages from non-admins
      antiviewonce: false,
      antibot: false,
      anticall: false, // Anti-call feature
      antigroupmention: false, // Anti-group mention feature
      antigroupmentionAction: 'delete', // 'delete', 'kick'
      welcome: false,
      welcomeMessage: '╭╼━≪•𝙽𝙴𝚆 𝙼𝙴𝙼𝙱𝙴𝚁•≫━╾╮\n┃𝚆𝙴𝙻𝙲𝙾𝙼𝙴: @user 👋\n┃Member count: #memberCount\n┃𝚃𝙸𝙼𝙴: time⏰\n╰━━━━━━━━━━━━━━━╯\n\n*@user* Welcome to *@group*! 🎉\n*Group 𝙳𝙴𝚂𝙲𝚁𝙸𝙿𝚃𝙸𝙾𝙽*\ngroupDesc\n\n> *ᴘᴏᴡᴇʀᴇᴅ ʙʏ DEX-MINI-BOT*',
      goodbye: false,
      goodbyeMessage: 'Goodbye @user 👋 We will never miss you!',
      antiSpam: false,
      antidelete: false,
      nsfw: false,
      detect: false,
      chatbot: false,
      autosticker: false // Auto-convert images/videos to stickers
    },
    
    // API Keys (add your own)
    apiKeys: {
      // Add API keys here if needed
      openai: '',
      deepai: '',
      remove_bg: ''
    },
    
    // Message Configuration
    messages: {
      wait: '⏳ Please wait...',
      success: '✅ Success!',
      error: '❌ Error occurred!',
      ownerOnly: '👑 This command is only for bot owner!',
      adminOnly: '🛡️ This command is only for group admins!',
      groupOnly: '👥 This command can only be used in groups!',
      privateOnly: '💬 This command can only be used in private chat!',
      botAdminNeeded: '🤖 Bot needs to be admin to execute this command!',
      invalidCommand: '❓ Invalid command! Type .menu for help'
    },
    
    // Timezone
    timezone: 'Asia/Karachi',
    
    // Limits
    maxWarnings: 3,
    
    // Social Links (optional)
    social: {
      tiktok: 'https://tiktok.com/@ranafurqanrajput',
      channel: 'https://whatsapp.com/channel/0029VbCiT0g8vd1P3dJZqm2J',
      group: 'https://chat.whatsapp.com/GgpOlIFzMyTJ4DCsDKIZYr?s=cl&p=a&iam=2'
    },

    // Menu DP (image shown with .menu) and menu song (sent after the menu)
    menuImageUrl: 'https://i.ibb.co/Rkt4Q06d/jawadmd.jpg',
    menuSong: 'utils/menu-song.mp3'
};

