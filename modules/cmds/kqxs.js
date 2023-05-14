"use strict";

const config = {
    name: 'kqxs',
    role: 0,
    version: '1.0.0',
    author: ['MạnhG'],
    viDesc: 'KQ XS.',
    enDesc: 'KQ XS.',
    category: ['Tin tức', 'Social'],
    usages: '',
    timestamp: 5
}

async function onMessage({ message }) {
    if (!args[0]) { return api.sendMessage(`Bạn chưa chọn miền/n1: mn ( Miền Nam )/n2: mb ( Miền Bắc )`, event.threadID, event.messageID) }
if (args[0] != "mn" && "mb" ) { return api.sendMessage(`Sai định dạng`, event.threadID, event.messageID) 
  } else 
    if ((args[0] == "mn" ) { 
     let data = await global.social.xsmn();
      message.reply(JSON.parse(JSON.stringify(data)));
  } else
    if ((args[0] == "mb" ) { 
 let data = await global.social.xsmb();
    message.reply(JSON.parse(JSON.stringify(data)));

  } 

export {
    config,
    onMessage
}
