export type RepairStatus = 'Queued' | 'Diagnostics Complete' | 'In Repair' | 'Ready for Pickup' | 'Collected';

export interface RepairTicket {
  id: string;
  ticketNumber: string;
  customerName: string;
  customerPhone: string;
  customerEmail: string;
  deviceType: string;
  deviceModel: string;
  issue: string;
  dropOffDate: string;
  dropOffTime: string;
  status: RepairStatus;
  createdAt: string;
  updatedAt: string;
  notes?: string;
}

const STORAGE_KEY = 'gph_repair_tickets';

export const REPAIR_STATUSES: RepairStatus[] = [
  'Queued',
  'Diagnostics Complete',
  'In Repair',
  'Ready for Pickup',
  'Collected',
];

export const REPAIR_SERVICES = [
  { title: 'Screen Replacement', desc: 'Cracked or unresponsive displays for phones, tablets, and laptops.', icon: '📱' },
  { title: 'Battery Replacement', desc: 'Restore full-day power with genuine and premium-grade batteries.', icon: '🔋' },
  { title: 'Motherboard Repair', desc: 'Advanced board-level diagnostics and component-level repairs.', icon: '🔧' },
  { title: 'Data Recovery', desc: 'Recover photos, files, and contacts from damaged or locked devices.', icon: '💾' },
  { title: 'Water Damage Repair', desc: 'Ultrasonic cleaning and corrosion treatment for liquid-damaged devices.', icon: '💧' },
  { title: 'Software & Unlocking', desc: 'OS reinstalls, firmware fixes, and account recovery assistance.', icon: '⚙️' },
];

export function getRepairTickets(): RepairTicket[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : getDemoTickets();
  } catch {
    return getDemoTickets();
  }
}

export function saveRepairTickets(tickets: RepairTicket[]) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(tickets));
}

export function createRepairTicket(data: Omit<RepairTicket, 'id' | 'ticketNumber' | 'status' | 'createdAt' | 'updatedAt'>): RepairTicket {
  const tickets = getRepairTickets();
  const ticket: RepairTicket = {
    ...data,
    id: crypto.randomUUID(),
    ticketNumber: `GPH-${Date.now().toString().slice(-6)}`,
    status: 'Queued',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };
  tickets.unshift(ticket);
  saveRepairTickets(tickets);
  return ticket;
}

export function findTicketByNumber(ticketNumber: string, phone?: string): RepairTicket | undefined {
  const tickets = getRepairTickets();
  return tickets.find(
    (t) =>
      t.ticketNumber.toLowerCase() === ticketNumber.toLowerCase() &&
      (!phone || t.customerPhone.replace(/\s/g, '') === phone.replace(/\s/g, '')),
  );
}

function getDemoTickets(): RepairTicket[] {
  const demo: RepairTicket[] = [
    {
      id: 'demo-1',
      ticketNumber: 'GPH-482910',
      customerName: 'James M.',
      customerPhone: '254712345678',
      customerEmail: 'demo@gadgetsplanethub.com',
      deviceType: 'Phone',
      deviceModel: 'iPhone 14 Pro',
      issue: 'Cracked screen, touch not responding on left side',
      dropOffDate: new Date().toISOString().slice(0, 10),
      dropOffTime: '10:00 AM',
      status: 'In Repair',
      createdAt: new Date(Date.now() - 86400000 * 2).toISOString(),
      updatedAt: new Date().toISOString(),
      notes: 'OEM screen ordered. Expected completion within 24 hours.',
    },
  ];
  saveRepairTickets(demo);
  return demo;
}

export function statusProgress(status: RepairStatus): number {
  const idx = REPAIR_STATUSES.indexOf(status);
  return Math.round(((idx + 1) / REPAIR_STATUSES.length) * 100);
}
