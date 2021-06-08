const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");


let prefix = config.prefix;

client.on("ready", () => {
   console.log(`He vuelto...`);

   client.user.setPresence( {
       activity: {
           setImage: "https://cdn.discordapp.com/attachments/840878207724027914/850750397613998100/chicago_rp_no_fondo-2.png",
           name: `+ayuda | 24/7 Moderando Chicago MineCraft`,
           type: "PLAYING"
       },
       status: "online"
   });
});



client.on('message', async message => {
  if (!message.content.startsWith(prefix)) return; 
  if (message.author.bot) return;

  const args = message.content.slice(prefix.length).trim().split(/ +/g);

  if(message.content.startsWith(prefix + 'ayuda')) {
    let usuario = message.guild.roles.cache.find((r) => r.id === "850867693342425098");
  
  
      let helpembeduser = new Discord.MessageEmbed()
      .setTitle('**Chicago Minecraft | Comandos**')
      .setDescription('Prefix: "+", Recuerda utilizar estos comando en el canal correcto')
      .addField('**__Generales__**', "`sugerencia`, `ip`, `reportar`, `dado`, `pregunta`", true)
      .setColor("RED")
      message.channel.send(helpembeduser);
      
    }

/////////////////////////////////////////////////  ||  Sug/bugs  ||  /////////////////////////////////////////////////

if (message.content.startsWith(prefix + 'sugerencia')) {
    if (message.channel.id !== "850961616517595177") 
      return message.channel.send(`**Este no es el canal correcto para utilizar este comando.**`);
    message.delete().catch(O_o => {});
    let suggestion = args.slice(1).join(" ");
    if (!suggestion)
      return message.channel.send(`Tienes que poner una sugerencia`);

    let suggestembed = new Discord.MessageEmbed() 
      .setAuthor(
        "👍 " +
         message.member.user.username +
          " ha enivado una sugerencia" +
          " ⭐"
      )
      .setFooter(client.user.username, client.user.displayAvatarURL)
      .setTimestamp()
      .addField(`**Sugerencia**:`, `${suggestion}\n\n***__¡Vota!__***`)
      .setThumbnail(message.author.avatarURL())
      .setColor("BLUE");
      message.channel.send(suggestembed).then(m =>  m.react("✅") + m.react("❌"))
  }
  // para poner sugerencias staff
  if (message.content.startsWith(prefix + 'stsugerencia')) {
    if (message.channel.id !== "851471916568543292") 
      return message.channel.send(`**Este no es el canal correcto para utilizar este comando.**`);
    message.delete().catch(O_o => {});
    let suggestion = args.slice(1).join(" ");
    if (!suggestion)
      return message.channel.send(`Tienes que poner una sugerencia`);

    let suggestembed = new Discord.MessageEmbed() 
      .setAuthor(
        "👍 " +
         message.member.user.username +
          " ha enivado una sugerencia" +
          " ⭐"
      )
      .setFooter(client.user.username, client.user.displayAvatarURL)
      .setTimestamp()
      .addField(`**Sugerencia**:`, `${suggestion}\n\n***__¡Vota!__***`)
      .setThumbnail(message.author.avatarURL())
      .setColor("BLUE");
      message.channel.send(suggestembed).then(m =>  m.react("✅") + m.react("❌"))
  }
   // para poner reportar bugs
  if (message.content.startsWith(prefix + 'bug')) {
    if (message.channel.id !== "851626650336755744") 
      return message.channel.send(`**Este no es el canal correcto para utilizar este comando.**`);
    message.delete().catch(O_o => {});
    let suggestion = args.slice(1).join(" ");
    if (!suggestion)
      return message.channel.send(`Tienes que poner una sugerencia`);

    let suggestembed = new Discord.MessageEmbed() 
      .setAuthor(
        "👍 " +
         message.member.user.username +
          " ha enviado un reporte de un bug" +
          " ⭐"
      )
      .setFooter(client.user.username, client.user.displayAvatarURL)
      .setTimestamp()
      .addField(`**Sugerencia**:`, `${suggestion}\n\n***__¡Si Eres Unicamente Dueño O Desarrollador Vota si solucionastes el bug!__***`)
      .setThumbnail(message.author.avatarURL())
      .setColor("BLUE");
      message.channel.send(suggestembed).then(m =>  m.react("✅") + m.react("❌"))
  }

  /////////////////////////////////////////////////  ||  Anuncio/Encuesta  ||  /////////////////////////////////////////////////
  if(message.content.startsWith(`${prefix}help`)){
    if(args[1] == 'sugerencias'){
      var channel = message.mentions.channels.first()
      var suggest = '828561407569690634'
      if(!channel) return message.channel.send(`${message.author} debes mencionar el canal`)
      var embed = new Discord.MessageEmbed()
      .setColor("RED")
      .setTitle("__¿Cómo hago una sugerencia?__")
      .setDescription(`\n1- Primero que todo ve al correspondiente canal de sugerencias <#${suggest}>\n\n2- Utiliza el comando "${prefix}sugerencia" para colocar tu sugerencia\n\nListo, sugerencia enviada!`)
      channel.send(embed)
    }
 }
  if(message.content.startsWith(prefix + 'encuesta')) {
    if (!message.member.hasPermission("ADMIN"))
      return message.channel.send(`**No tiene los permisos necesarios para utilizar este comando.**`);
    message.delete().catch(O_o => {});

    let reporte = args.slice(1).join(" ");

    if(!reporte) return message.channel.send(`:grey_exclamation: | **Envia tu votacion**`)
  
    const embed = new Discord.MessageEmbed()
    .setTitle(':e_mail: | **Encuesta** | 📌')
    .setDescription('`Votacion Activa.`')
    .setDescription(reporte)
    .setThumbnail(message.author.avatarURL())
    .setColor("BLUE")
    .setFooter('Votacion enviada por '+ message.author.tag)
    
    message.channel.send(embed).then(m =>  m.react("✅") + m.react("❌"))
  }
//anuncio
  if (message.content.startsWith(prefix + "anuncio")) {
    if (!message.member.hasPermission("ADMIN"))
      return message.channel.send(`**No tiene los permisos necesarios para utilizar este comando.**`);

    const sayMessage = args.slice(1).join(" ");

    message.delete().catch(O_o => {});

    message.channel.send(sayMessage);
  }

/////////////////////////////////////////////////  ||  Verificarse  ||  /////////////////////////////////////////////////

  if (message.content.startsWith(prefix + "verificar")) {
   if (message.channel.id !== "851472456752955433") 
      return message.channel.send(`**Este no es el canal correcto para utilizar este comando.**`);
      message.channel.send("[Chicago:RP] Estoy revisando tus datos, aguarda un momento...")
      .then(async m => {
        setTimeout(() => {
          m.edit("[CO:MC] ¡Verificando que no eres un robot!");
        }, 5000);

        setTimeout(() => {
          m.edit("[CO:MC] Verificando que no seas una multicuenta...");
            }, 8000);
        setTimeout(() => {
          const embed = new Discord.MessageEmbed()
            .setColor("BLUE")
            .setDescription("✅ ¡" +message.author.username + " Felicitaciones, pasaste la verificación correctamente!");
          m.edit(embed);
          m.delete(embed);
        }, 12000); 

        setTimeout(() => {
          message.member.roles.add("850867693342425098");   //poner la id del rol a poner y abajo a quitar
          message.member.roles.remove("850138042870005801") 
        }, 14000);
      m.delete(20000);
  });
    message.delete().catch(O_o => {});
}

/////////////////////////////////////////////////  ||  Reportess  ||  /////////////////////////////////////////////////

if(message.content.startsWith(prefix + 'reportar')) {
  let reporte = new Discord.MessageEmbed()
      .setTitle('**¿Cómo hago para reportar a un usuario?**')
      .setDescription('1 - Dirigete a el correspondiente canal ( #reportes )\n\n2 - Una vez en el canal ve a los mensajes fijados y ve el formato y copíalo\n\n4 - Una vez copiado el formato regresa al canal y pega el formato\n\n5 - Una vez pegado el formato, rellena con los datos correspondientes y envialo.\n\nY listo, tu reporte lo tomará un staff y se analizará, un saludo!\n\n')
      .setTimestamp()
      .setColor("BLUE")
  message.channel.send(reporte);
}

/////////////////////////////////////////////////       ||  IP  ||      /////////////////////////////////////////////////
if(message.content.startsWith(prefix + 'ip')) {
    const ip = new Discord.MessageEmbed()
        .setColor("BLUE")
        .setDescription(`La IP del Servidor es la siguente\n IP: chicagorpmc.aternos.me`);
    message.channel.send({ embed: ip });
}
if(message.content.startsWith(prefix + 'avatar')) {
  const avatar = new Discord.MessageEmbed()
    .setTitle('¡Esta es tu foto de perfil!')
    .setColor(0x5E9DE4)
    .setAuthor(message.author.username, client.user.avatarURL())
    .setImage(message.author.avatarURL())
    .setFooter('Avatar de: '+message.member.displayName, message.author.avatarURL())
    .setTimestamp();
  message.channel.send({ embed: avatar});
}
if (message.content.startsWith('+kick')) {

  const user = message.mentions.users.first();

  if (user) {

    const member = message.guild.member(user);

    if (member) {

      member
        .kick('Optional reason that will display in the audit logs')
        .then(() => {

          message.reply(`Has kickeado con exito a ${user.tag}`);
        })
        .catch(err => {

          message.reply('No pude patear al miembro');

          console.error(err);
        });
    } else {

      message.reply("Ese usuario no está en este servidor!");
    }

  } else {
    message.reply("¡No mencionaste al usuario para kickear!");
  }
}

if (message.content.startsWith('+ban')) {

  const user = message.mentions.users.first();

  if (user) {

    const member = message.guild.member(user);

    if (member) {
      member
        .ban({
          reason: '¡Eran malos!',
        })
        .then(() => {

          message.reply(`has baneado con éxito a  ${user.tag}`);
        })
        .catch(err => {

          message.reply('No pude prohibir al miembro');

          console.error(err);
        });
    } else {

      message.reply("¡Ese usuario no está en este servidor!");
    }
  } else {

    message.reply("¡No mencionaste al usuario para banear!");
  }
}
if(message.content.startsWith(prefix + 'dado')){
  var Mensajes = ["1", "2", "3", "4", "5", "6"];
  var aleatorio = Math.floor(Math.random()*(Mensajes.length));
     message.channel.send(Mensajes[aleatorio]);
}
if(message.content.startsWith(prefix + 'pregunta')) {
      var Mensajes = ["Si", "No", "Puede ser "];
      var aleatorio = Math.floor(Math.random()*(Mensajes.length));
         message.channel.send(Mensajes[aleatorio]);
}




});
 

client.login(config.token);