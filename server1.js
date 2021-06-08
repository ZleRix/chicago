const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");


let prefix = config.prefix;

client.on("ready", () => {
   console.log(`He vuelto...`);

   client.user.setPresence( {
       activity: {
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
    let usuario = message.guild.roles.cache.find((r) => r.id === "828561373994287115");
  
    if (message.member.roles.cache.has(usuario.id)) {
  
      let helpembeduser = new Discord.MessageEmbed()
      .setTitle('**Chicago Roleplay | Comandos**')
      .setDescription('Prefix: "+", Recuerda utilizar estos comando en el canal correcto')
      .addField('**__Generales__**', "`sugerencia`, `ip`, `reportar`, `normativas`, `dado`, `pregunta`", true)
      .setColor("RED")
      message.channel.send(helpembeduser);
      }
    }
// para poner sugerencias
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
          " ha mandado una sugerencia" +
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
    if (message.channel.id !== "850948974553727066") 
      return message.channel.send(`**Este no es el canal correcto para utilizar este comando.**`);
    message.delete().catch(O_o => {});
    let suggestion = args.slice(1).join(" ");
    if (!suggestion)
      return message.channel.send(`Tienes que poner una sugerencia`);

    let suggestembed = new Discord.MessageEmbed() 
      .setAuthor(
        "👍 " +
         message.member.user.username +
          " ha mandado una sugerencia" +
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
    if (message.channel.id !== "828561411441033216") 
      return message.channel.send(`**Este no es el canal correcto para utilizar este comando.**`);
    message.delete().catch(O_o => {});
    let suggestion = args.slice(1).join(" ");
    if (!suggestion)
      return message.channel.send(`Tienes que poner una sugerencia`);

    let suggestembed = new Discord.MessageEmbed() 
      .setAuthor(
        "👍 " +
         message.member.user.username +
          " ha mandado un reporte de un bug" +
          " ⭐"
      )
      .setFooter(client.user.username, client.user.displayAvatarURL)
      .setTimestamp()
      .addField(`**Sugerencia**:`, `${suggestion}\n\n***__¡Si Eres Unicamente Dueño O Desarrollador Vota si solucionastes el bug!__***`)
      .setThumbnail(message.author.avatarURL())
      .setColor("BLUE");
      message.channel.send(suggestembed).then(m =>  m.react("✅") + m.react("❌"))
  }
// para poner una encuesta 
  if(message.content.startsWith(prefix + 'encuesta')) {
    if (!message.member.hasPermission("ADMINISTRADOR"))
      return message.channel.send(`**Tu no puedes utilizar este comando.**`);
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
    if (!message.member.hasPermission("ADMINISTRATOR"))
      return message.channel.send(`**Tu no puedes utilizar este comando.**`);

    const sayMessage = args.slice(1).join(" ");

    message.delete().catch(O_o => {});

    message.channel.send(sayMessage);
  }

  if (message.content.startsWith(prefix + "verificar")) {
   if (message.channel.id !== "840888177857396746") 
      return message.channel.send(`**Este no es el canal correcto para utilizar este comando.**`);
      message.channel.send("[Chicago:RP] Estoy revisando tus datos, aguarda un momento...")
      .then(async m => {
        setTimeout(() => {
          m.edit("[Chicago:RP] ¡Verificando que no eres un robot!");
        }, 5000);

        setTimeout(() => {
          m.edit("[Chicago:RP] Verificando que no seas una multicuenta...");
            }, 8000);
        setTimeout(() => {
          const embed = new Discord.MessageEmbed()
            .setColor("BLUE")
            .setDescription("✅ ¡" +message.author.username + " Felicitaciones, pasaste la verificación correctamente!");
          m.edit(embed);
          m.delete(embed);
        }, 12000); 

        setTimeout(() => {
          message.member.roles.add("828561373994287115");   //poner la id del rol a poner y abajo a quitar
          message.member.roles.remove("823996149269921812") 
        }, 14000);
      m.delete(20000);
  });
    message.delete().catch(O_o => {});
}

if(message.content.startsWith(prefix + 'reportar')) {
  let reporte = new Discord.MessageEmbed()
      .setTitle('**¿Cómo hago para reportar a un usuario/staff?**')
      .setDescription('1 - Accede al foro y regístrate, link: http://humanprojectrp.rf.gd/\n\n2 - Una vez registrado ve a la sección de reportes\nlink(Usuarios): http://humanprojectrp.rf.gd/forumdisplay.php?fid=8\nlink(Staff): http://humanprojectrp.rf.gd/forumdisplay.php?fid=80\n\n3 - Ve al post de formato y copíalo\nlink(Usuarios): http://humanprojectrp.rf.gd/showthread.php?tid=3\nlink(Staff): http://humanprojectrp.rf.gd/showthread.php?tid=109\n\n4 - Una vez copiado el formato regresa a la sección de reportes y dale click a Nuevo Tema y pega el formato\n\n5 - Una vez pegado el formato en el tema, rellena con los datos correspondientes y dale a Publicar Tema\n\nY listo, tu reporte lo tomará un staff y se analizará, un saludo!\n\n')
      .setTimestamp()
      .setColor("BLUE")
  message.channel.send(reporte);
}

if(message.content.startsWith(prefix + 'musica')) {
  let musica = new Discord.MessageEmbed()
    .setTitle('**¿Cómo poner música en el juego?**')
    .setDescription('1- Lo primero es estar en un vehículo carro/moto, lo siguiente es poner /parlante.\n\n2- Tienes que entrar a uno de los siguientes links: [https://ytmp3.cc/en13/ o Cualquier Convertidor de YT a mp3]\n\n3- Lo siguiente que tienes que hacer es buscar y copiar el link de descarga de la canción que quieras y prefieras.\n\n4- Como último paso tienes que pegar el URL del video en el converter y darle convertir (converter) y cuando se termine el proceso das click dercho en el boton DESCARGAR o (DOWNLOAD) y das copiar vinculo,una vez copiado el vinculo vas al parlante y pegas ese vinculo, y das crear parlante.\n\n5- Y así, de fácil es poner música si tienes dudas pregúntanos y con gusto te ayudaremos en lo que este a nuestro alcance.\n\n_Un saludo, equipo Administrativo de Chicago Roleplay!_')
    .setTimestamp()
    .setColor("BLUE")
  message.channel.send(musica);
}

if(message.content.startsWith(prefix + 'foro')) {
  const foro = new Discord.MessageEmbed()
      .setColor("BLUE")
      .setDescription(` **__El Foro es el siguente__**: http://humanprojectrp.rf.gd/`);
  message.channel.send({ embed: foro });
}



if(message.content.startsWith(prefix + 'normativas')) {
    const normas = new Discord.MessageEmbed()
        .setColor("BLUE")
        .setDescription(`Las normativas se encuentran en: \n http://humanprojectrp.rf.gd/ \n **No olvides leerlas**`); // Link de las normas del foro
    message.channel.send({ embed: normas });
}

if(message.content.startsWith(prefix + 'ip')) {
    const ip = new Discord.MessageEmbed()
        .setColor("BLUE")
        .setDescription(`La IP del Servidor es la siguente, si no te funciona busca el servidor en el buscador de MTA como "Chicago Roleplay" \n IP: mtasa://135.148.59.55:22523`);
    message.channel.send({ embed: ip });
}



if(message.content.startsWith(prefix + 'ds')) {
  const ts3 = new Discord.MessageEmbed()
      .setColor("BLUE")
      .setDescription(`**Para invitar a alguien al Discord usa la siguiente invitacion** \n __https://discord.gg/kuFfxU5YnB__`);
  message.channel.send({ embed: ts3 });
}


if(message.content.startsWith(prefix + 'fichaspj')) {
  const fichas = new Discord.MessageEmbed()
      .setColor("BLACK")
      .setDescription(`http://humanprojectrp.rf.gd/forumdisplay.php?fid=48`);
  message.channel.send({ embed: fichas });
}

});

client.on('message', message =>{
  if (!message.content.startsWith(prefix)) return; 
  if (message.author.bot) return;

  const args = message.content.slice(prefix.length).trim().split(/ +/g);


if(message.content.startsWith(prefix + 'avatar')) {
  const avatar = new Discord.MessageEmbed()
    .setTitle('¡Esta es tu foto de perfil!')
    .setColor(0x5E9DE4)
    .setAuthor(message.author.username, message.author.avatarURL())
    .setImage(message.author.avatarURL())
    .setFooter('Avatar de: '+message.member.displayName, client.user.avatarURL())
    .setTimestamp();
  message.channel.send({ embed: avatar});
}
});


client.on("message" , msg => {
  var Mensajes = ["1", "2", "3", "4", "5", "6"];
  var aleatorio = Math.floor(Math.random()*(Mensajes.length));
  if(msg.content.startsWith(prefix + 'dado')){
     msg.channel.send(Mensajes[aleatorio]);
    }
});

client.on("message" , msg => {
  var Mensajes = ["Si", "No", "Puede ser "];
  var aleatorio = Math.floor(Math.random()*(Mensajes.length));
  if(msg.content.startsWith(prefix + 'pregunta')) {
     msg.channel.send(Mensajes[aleatorio]);
    }
});

                  //        Sanciones         //

                        //    kick      //

client.on('message', message => {
  // Ignore messages that aren't from a guild
  if (!message.guild) return;

  // If the message content starts with "!kick"
  if (message.content.startsWith('+kick')) {
    // Assuming we mention someone in the message, this will return the user
    // Read more about mentions over at https://discord.js.org/#/docs/main/master/class/MessageMentions
    const user = message.mentions.users.first();
    // If we have a user mentioned
    if (user) {
      // Now we get the member from the user
      const member = message.guild.member(user);
      // If the member is in the guild
      if (member) {
        /**
         * Kick the member
         * Make sure you run this on a member, not a user!
         * There are big differences between a user and a member
         */
        member
          .kick('Optional reason that will display in the audit logs')
          .then(() => {
            // We let the message author know we were able to kick the person
            message.reply(`Has kickeado con exito a ${user.tag}`);
          })
          .catch(err => {
            // An error happened
            // This is generally due to the bot not being able to kick the member,
            // either due to missing permissions or role hierarchy
            message.reply('No pude patear al miembro');
            // Log the error
            console.error(err);
          });
      } else {
        // The mentioned user isn't in this guild
        message.reply("Ese usuario no está en este servidor!");
      }
      // Otherwise, if no user was mentioned
    } else {
      message.reply("¡No mencionaste al usuario para kickear!");
    }
  }
});

                                //    ban     //

client.on('message', message => {
  // Ignore messages that aren't from a guild
  if (!message.guild) return;

  // if the message content starts with "!ban"
  if (message.content.startsWith('+ban')) {
    // Assuming we mention someone in the message, this will return the user
    // Read more about mentions over at https://discord.js.org/#/docs/main/master/class/MessageMentions
    const user = message.mentions.users.first();
    // If we have a user mentioned
    if (user) {
      // Now we get the member from the user
      const member = message.guild.member(user);
      // If the member is in the guild
      if (member) {
        /**
         * Ban the member
         * Make sure you run this on a member, not a user!
         * There are big differences between a user and a member
         * Read more about what ban options there are over at
         * https://discord.js.org/#/docs/main/master/class/GuildMember?scrollTo=ban
         */
        member
          .ban({
            reason: '¡Eran malos!',
          })
          .then(() => {
            // We let the message author know we were able to ban the person
            message.reply(`has baneado con éxito a  ${user.tag}`);
          })
          .catch(err => {
            // An error happened
            // This is generally due to the bot not being able to ban the member,
            // either due to missing permissions or role hierarchy
            message.reply('No pude prohibir al miembro');
            // Log the error
            console.error(err);
          });
      } else {
        // The mentioned user isn't in this guild
        message.reply("¡Ese usuario no está en este servidor!");
      }
    } else {
      // Otherwise, if no user was mentioned
      message.reply("¡No mencionaste al usuario para banear!");
    }
  }
});


client.login(config.token);