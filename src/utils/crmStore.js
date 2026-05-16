/**
 * crmStore.js
 * Utility to manage CRM clients and communication history using localStorage.
 * This simulates a database for the frontend integration.
 */

const CRM_STORAGE_KEY = 'kraken_crm_clients';
const TICKETS_STORAGE_KEY = 'kraken_crm_tickets';

// Initial seed data based on existing mocks
const initialClients = [
  {
    id: 1,
    nombre: 'Alejandro Martínez',
    sexo: 'Masculino',
    edad: '34',
    profesion: 'Arquitecto',
    intereses: 'Diseño sostenible, Domótica',
    calificacion: 4,
    cumpleanos: '15 de Mayo',
    estadoCivil: 'Casado',
    hijos: '2 (Luis y Sofía)',
    fechasImportantes: 'Aniversario: 12 Octubre, Apertura estudio: 3 Marzo',
    direccion: 'Av. Reforma 1234, Int 5',
    estado: 'CDMX',
    pais: 'México',
    email: 'a.martinez@estudio-arch.mx',
    whatsapp: '+52 55 1234 5678',
    estadoConversacion: 'Activo - Cotización pendiente',
    seguimientos: 'Llamar miércoles para revisión de planos',
    nivelExperiencia: 'Avanzado',
    atencionPostVenta: 'Alta - Cliente recurrente',
    comentarios: 'Interesado en materiales ecológicos para su próximo proyecto en Valle de Bravo.',
    social: '@alex_arch_mx',
    web: 'www.estudiomartinez.mx'
  },
  {
    id: 2,
    nombre: 'Lucía Fernández',
    sexo: 'Femenino',
    edad: '28',
    profesion: 'Diseñadora Industrial',
    intereses: 'Mobiliario minimalista',
    calificacion: 5,
    cumpleanos: '22 de Agosto',
    estadoCivil: 'Soltera',
    hijos: 'Ninguno',
    fechasImportantes: 'Lanzamiento colección: 15 Noviembre',
    direccion: 'Colonia Americana, Calle Libertad 45',
    estado: 'Jalisco',
    pais: 'México',
    email: 'lucia.fer@design.com',
    whatsapp: '+52 33 9876 5432',
    estadoConversacion: 'Cerrado - Venta realizada',
    seguimientos: 'Enviar catálogo de nueva temporada en Enero',
    nivelExperiencia: 'Intermedio',
    atencionPostVenta: 'Media',
    comentarios: 'Prefiere comunicación por WhatsApp antes que llamadas.',
    social: '@lucia_design',
    web: 'www.luciafer.com'
  }
];

const initialTickets = {
  1: [
    { id: 'T-1024', fecha: '20 Oct 2025', asunto: 'Consulta sobre materiales eco', estado: 'Cerrado', canal: 'WhatsApp' },
    { id: 'T-1055', fecha: '12 Nov 2025', asunto: 'Presupuesto estudio Reforma', estado: 'Abierto', canal: 'Chat' },
    { id: 'T-1089', fecha: '05 Ene 2026', asunto: 'Seguimiento post-venta', estado: 'Pendiente', canal: 'WhatsApp' }
  ],
  2: [
    { id: 'L-2011', fecha: '15 Dic 2025', asunto: 'Pedido mobiliario oficina', estado: 'Cerrado', canal: 'Web' },
    { id: 'L-2045', fecha: '10 Feb 2026', asunto: 'Ajuste de medidas catálogo', estado: 'Abierto', canal: 'WhatsApp' }
  ]
};

export const crmStore = {
  // Initialize storage if empty
  init: () => {
    if (!localStorage.getItem(CRM_STORAGE_KEY)) {
      localStorage.setItem(CRM_STORAGE_KEY, JSON.stringify(initialClients));
    }
    if (!localStorage.getItem(TICKETS_STORAGE_KEY)) {
      localStorage.setItem(TICKETS_STORAGE_KEY, JSON.stringify(initialTickets));
    }
  },

  getClients: () => {
    crmStore.init();
    return JSON.parse(localStorage.getItem(CRM_STORAGE_KEY));
  },

  getClientById: (id) => {
    const clients = crmStore.getClients();
    return clients.find(c => c.id === parseInt(id));
  },

  getClientByIdentifier: (identifier) => {
    const clients = crmStore.getClients();
    // Search by name or email or whatsapp
    return clients.find(c => 
      c.nombre === identifier || 
      c.email === identifier || 
      c.whatsapp === identifier
    );
  },

  updateClient: (id, data) => {
    const clients = crmStore.getClients();
    const index = clients.findIndex(c => c.id === parseInt(id));
    if (index !== -1) {
      clients[index] = { ...clients[index], ...data };
      localStorage.setItem(CRM_STORAGE_KEY, JSON.stringify(clients));
      return clients[index];
    }
    return null;
  },

  getOrCreateClient: (userData) => {
    const existing = crmStore.getClientByIdentifier(userData.nombre) || 
                   crmStore.getClientByIdentifier(userData.whatsapp);
    
    if (existing) return existing;

    const clients = crmStore.getClients();
    const newClient = {
      id: Date.now(),
      nombre: userData.nombre || 'Nuevo Cliente',
      sexo: 'S/D',
      edad: 'S/D',
      profesion: 'S/D',
      intereses: 'Perfilado en proceso (IA)...',
      calificacion: 1,
      cumpleanos: 'S/D',
      estadoCivil: 'S/D',
      hijos: 'S/D',
      fechasImportantes: 'Primer contacto: ' + new Date().toLocaleDateString(),
      direccion: 'S/D',
      estado: 'S/D',
      pais: 'S/D',
      email: userData.email || '',
      whatsapp: userData.whatsapp || '',
      estadoConversacion: 'Nueva',
      seguimientos: 'Automático',
      nivelExperiencia: 'Nuevo',
      atencionPostVenta: 'Pendiente',
      comentarios: 'Expediente creado automáticamente desde interacción en chat.',
      social: '',
      web: ''
    };

    clients.push(newClient);
    localStorage.setItem(CRM_STORAGE_KEY, JSON.stringify(clients));
    return newClient;
  },

  getTickets: (clientId) => {
    crmStore.init();
    const allTickets = JSON.parse(localStorage.getItem(TICKETS_STORAGE_KEY));
    return allTickets[clientId] || [];
  },

  addTicket: (clientId, ticketData) => {
    crmStore.init();
    const allTickets = JSON.parse(localStorage.getItem(TICKETS_STORAGE_KEY));
    if (!allTickets[clientId]) allTickets[clientId] = [];
    
    const newTicket = {
      id: 'T-' + Math.floor(1000 + Math.random() * 9000),
      fecha: new Date().toLocaleDateString('es-ES', { day: '2-digit', month: 'short', year: 'numeric' }),
      asunto: ticketData.asunto || 'Interacción de Chat',
      estado: ticketData.estado || 'Abierto',
      canal: ticketData.canal || 'Chat'
    };

    allTickets[clientId].push(newTicket);
    localStorage.setItem(TICKETS_STORAGE_KEY, JSON.stringify(allTickets));
    return newTicket;
  }
};
