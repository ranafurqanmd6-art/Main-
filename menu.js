/**
 * Menu Command - Display all available commands
 */

const config = require('../../config');
const { loadCommands } = require('../../utils/commandLoader');

module.exports = {
  name: 'menu',
  aliases: ['help', 'commands'],
  category: 'general',
  description: 'Show all available commands',
  usage: '.menu',
  
  async execute(sock, msg, args, extra) {
    try {
      const commands = loadCommands();
      const categories = {};
      
      // Group commands by category
      commands.forEach((cmd, name) => {
        if (cmd.name === name) { // Only count main command names, not aliases
          if (!categories[cmd.category]) {
            categories[cmd.category] = [];
          }
          categories[cmd.category].push(cmd);
        }
      });
      
      const ownerNames = Array.isArray(config.ownerName) ? config.ownerName : [config.ownerName];
      const displayOwner = ownerNames[0] || config.ownerName || 'Bot Owner';
      
      let menuText = `╭━━『 *${config.botName}* 』━━╮\n\n`;
      const senderNumber = String(extra.sender || '').split('@')[0] || 'user';
      menuText += `👋 Welcome to ${config.botName} @${senderNumber}!\n\n`;
      menuText += `⚡ Prefix: ${config.prefix}\n`;
      const mainCommandNames = new Set();
      commands.forEach(command => mainCommandNames.add(command.name));
      menuText += `📦 Total Commands: ${mainCommandNames.size}\n`;
      menuText += `👑 Owner: ${displayOwner}\n\n`;
      
      // General Commands
      if (categories.general) {
        menuText += `┏━━━━━━━━━━━━━━━━━\n`;
        menuText += `┃ 🧭 GENERAL COMMAND\n`;
        menuText += `┗━━━━━━━━━━━━━━━━━\n`;
        categories.general.forEach(cmd => {
          menuText += `│ ➜ ${config.prefix}${cmd.name}\n`;
        });
        menuText += `\n`;
      }
      
      // AI Commands
      if (categories.ai) {
        menuText += `┏━━━━━━━━━━━━━━━━━\n`;
        menuText += `┃ 🤖 AI COMMAND\n`;
        menuText += `┗━━━━━━━━━━━━━━━━━\n`;
        categories.ai.forEach(cmd => {
          menuText += `│ ➜ ${config.prefix}${cmd.name}\n`;
        });
        menuText += `\n`;
      }
      
      // Group Commands
      if (categories.group) {
        menuText += `┏━━━━━━━━━━━━━━━━━\n`;
        menuText += `┃ 🔵 GROUP COMMAND\n`;
        menuText += `┗━━━━━━━━━━━━━━━━━\n`;
        categories.group.forEach(cmd => {
          menuText += `│ ➜ ${config.prefix}${cmd.name}\n`;
        });
        menuText += `\n`;
      }
      
      // Admin Commands
      if (categories.admin) {
        menuText += `┏━━━━━━━━━━━━━━━━━\n`;
        menuText += `┃ 🛡️ ADMIN COMMAND\n`;
        menuText += `┗━━━━━━━━━━━━━━━━━\n`;
        categories.admin.forEach(cmd => {
          menuText += `│ ➜ ${config.prefix}${cmd.name}\n`;
        });
        menuText += `\n`;
      }
      
      // Owner Commands
      if (categories.owner) {
        menuText += `┏━━━━━━━━━━━━━━━━━\n`;
        menuText += `┃ 👑 OWNER COMMAND\n`;
        menuText += `┗━━━━━━━━━━━━━━━━━\n`;
        categories.owner.forEach(cmd => {
          menuText += `│ ➜ ${config.prefix}${cmd.name}\n`;
        });
        menuText += `\n`;
      }
      
      // Media Commands
      if (categories.media) {
        menuText += `┏━━━━━━━━━━━━━━━━━\n`;
        menuText += `┃ 🎞️ MEDIA COMMAND\n`;
        menuText += `┗━━━━━━━━━━━━━━━━━\n`;
        categories.media.forEach(cmd => {
          menuText += `│ ➜ ${config.prefix}${cmd.name}\n`;
        });
        menuText += `\n`;
      }
      
      // Fun Commands
      if (categories.fun) {
        menuText += `┏━━━━━━━━━━━━━━━━━\n`;
        menuText += `┃ 🎭 FUN COMMAND\n`;
        menuText += `┗━━━━━━━━━━━━━━━━━\n`;
        categories.fun.forEach(cmd => {
          menuText += `│ ➜ ${config.prefix}${cmd.name}\n`;
        });
        menuText += `\n`;
      }
      
      // Utility Commands
      if (categories.utility) {
        menuText += `┏━━━━━━━━━━━━━━━━━\n`;
        menuText += `┃ 🔧 UTILITY COMMAND\n`;
        menuText += `┗━━━━━━━━━━━━━━━━━\n`;
        categories.utility.forEach(cmd => {
          menuText += `│ ➜ ${config.prefix}${cmd.name}\n`;
        });
        menuText += `\n`;
      }

       // Anime Commands
       if (categories.anime) {
        menuText += `┏━━━━━━━━━━━━━━━━━\n`;
        menuText += `┃ 👾 ANIME COMMAND\n`;
        menuText += `┗━━━━━━━━━━━━━━━━━\n`;
        categories.anime.forEach(cmd => {
          menuText += `│ ➜ ${config.prefix}${cmd.name}\n`;
        });
        menuText += `\n`;
      }

       // Textmaker Commands
       if (categories.textmaker?.length) {
        menuText += `┏━━━━━━━━━━━━━━━━━\n`;
        menuText += `┃ 🖋️ TEXTMAKER COMMAND\n`;
        menuText += `┗━━━━━━━━━━━━━━━━━\n`;
        categories.textmaker.forEach(cmd => {
          menuText += `│ ➜ ${config.prefix}${cmd.name}\n`;
        });
        menuText += `\n`;
      }
      
      menuText += `╰━━━━━━━━━━━━━━━━━\n\n`;
      menuText += `💡 Type ${config.prefix}help <command> for more info\n\n`;
      menuText += `┏━━━━━━━━━━━━━━━━━\n`;
      menuText += `┃ ⚙️ QUICK COMMANDS\n`;
      menuText += `┗━━━━━━━━━━━━━━━━━\n`;
      menuText += `│ ➜ ${config.prefix}settings\n`;
      menuText += `│ ➜ ${config.prefix}status\n`;
      menuText += `│ ➜ ${config.prefix}ping\n\n`;
      menuText += `┏━━━━━━━━━━━━━━━━━\n`;
      menuText += `┃ 🔗 OFFICIAL LINKS\n`;
      menuText += `┗━━━━━━━━━━━━━━━━━\n`;
      menuText += `📢 Channel: ${config.social.channel}\n`;
      menuText += `👥 Group: ${config.social.group}\n`;
      menuText += `🎵 TikTok: ${config.social.tiktok}\n\n`;
      menuText += `👑 Owner: ${displayOwner}\n`;
      menuText += `> *Powered by ${config.botName}*\n`;
      
      // Send menu with image (DP from URL, falls back to local image, then text)
      const fs = require('fs');
      const path = require('path');
      const imagePath = path.join(__dirname, '../../utils/bot_image.jpg');
      const contextInfo = {
        forwardingScore: 1,
        isForwarded: true,
        forwardedNewsletterMessageInfo: {
          newsletterJid: config.newsletterJid || '120363406449026172@newsletter',
          newsletterName: config.botName,
          serverMessageId: -1
        }
      };

      let sent = false;
      if (config.menuImageUrl) {
        try {
          await sock.sendMessage(extra.from, {
            image: { url: config.menuImageUrl },
            caption: menuText,
            mentions: [extra.sender],
            contextInfo
          }, { quoted: msg });
          sent = true;
        } catch (e) {
          console.error('Menu DP url failed, using fallback:', e.message);
        }
      }
      if (!sent && fs.existsSync(imagePath)) {
        await sock.sendMessage(extra.from, {
          image: fs.readFileSync(imagePath),
          caption: menuText,
          mentions: [extra.sender],
          contextInfo
        }, { quoted: msg });
        sent = true;
      }
      if (!sent) {
        await sock.sendMessage(extra.from, {
          text: menuText,
          mentions: [extra.sender]
        }, { quoted: msg });
      }

      // Menu song
      try {
        const songPath = path.join(__dirname, '../../', config.menuSong || 'utils/menu-song.mp3');
        if (fs.existsSync(songPath)) {
          await sock.sendMessage(extra.from, {
            audio: fs.readFileSync(songPath),
            mimetype: 'audio/mpeg',
            ptt: false
          }, { quoted: msg });
        }
      } catch (e) {
        console.error('Menu song error:', e.message);
      }

    } catch (error) {
      await extra.reply(`❌ Error: ${error.message}`);
    }
  }
};
