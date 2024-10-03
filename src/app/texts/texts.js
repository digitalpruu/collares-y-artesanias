const title = "Collares y Artesanías";
const email = "rubycontrerasromero@hotmail.com";
const mensajeWhatsApp = encodeURIComponent(
    `¡Hola! Estoy interesado en los productos de ${title} y me gustaría recibir más información sobre lo que ofrecen. ¡Espero su respuesta!`
);
const numeroWhatsApp = "3208390436";
const textos = {
    index: {
        title: title,
    },
    homeContent: {
        title: title,
    },
    about: {
        description1: "Collares y Artesanías ofrece una selección única de collares y manillas artesanales, elaborados con dedicación y creatividad.",
        description2: "Nos especializamos en crear piezas que reflejan estilo y personalidad, utilizando materiales de calidad para asegurar la durabilidad de nuestros productos.",
    },
    contact: {
        whatsappLink: `https://wa.me/${numeroWhatsApp}?text=${mensajeWhatsApp}`,
        email: email,
    },
    footer: {
        slogan: {
            p1: "Collares y Artesanías",
            p2: "Creaciones únicas para todos los gustos.",
        },
        address: "",
        phone: numeroWhatsApp,
        email: email,
        facebook: "https://www.facebook.com/profile.php?id=61565852884482",
        instagram: "https://www.instagram.com/",
        whatsappLink: `https://wa.me/${numeroWhatsApp}?text=${mensajeWhatsApp}`,
    },
};
export default textos;
