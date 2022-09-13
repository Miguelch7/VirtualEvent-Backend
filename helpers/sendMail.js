require('dotenv').config();
const nodemailer = require('nodemailer');

const createContentMail = name => {
  return `
    <div>
      <h2>¡Bienvenido al Webinar "El reto de humanizar el CX financiero en 2021."!</h2>
        
      <p>¡Hola, <span>${ name }</span>!</p>
        
      <p>¡Gracias por inscribirte al webinar <span>"El reto de humanizar el CX financiero en 2021."</span>! 
      Recuerda que el webinar se realizará el dia miércoles 16 de diciembre a las 17:00hs (Horario de Quito).</p>

      <p>Puedes unirte haciendo click 
        <a href="#">aquí</a>
      </p>
        
      <p>¿Tiene preguntas? Por favor, contáctenos en <a href="mailto:support@virtualevent.com">support@virtualevent.com</a>.</p>

      <p>¡Te esperamos!</p>
    </div>
  `;
};

const sendMail = async (name, email) => {
  
  try {

    let transport = nodemailer.createTransport({
      host: process.env.NM_HOST,
      port: process.env.NM_PORT,
      auth: {
          user: process.env.NM_AUTH_USER,
          pass: process.env.NM_AUTH_PASS
      }
  });
  
    const contentMail = createContentMail(name);

    await transport.sendMail({
      from: '\"Virtual Event - Webinar\" <noreply@virtualevent.com>',
      to: email,
      subject: '¡Bienvenido al Webinar \"El reto de humanizar el CX financiero en 2021.\"!',
      html: contentMail
    });

    console.log('Email sent successfully!');
  } catch (error) {
    console.log(error);
  };

};

module.exports = {
  sendMail
};
