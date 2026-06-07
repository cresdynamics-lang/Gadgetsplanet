import { useState, useEffect } from 'react';
import type { FormEvent } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { Search, Smartphone, Clock, CheckCircle2, Circle, Loader2 } from 'lucide-react';
import { findTicketByNumber, REPAIR_STATUSES, statusProgress, type RepairTicket } from '../lib/repairs';
import { BUSINESS } from '../lib/business';

const STATUS_COLORS: Record<string, string> = {
  'Queued': 'bg-zinc-100 text-zinc-600',
  'Diagnostics Complete': 'bg-blue-100 text-blue-700',
  'In Repair': 'bg-amber-100 text-amber-700',
  'Ready for Pickup': 'bg-emerald-100 text-emerald-700',
  'Collected': 'bg-primary text-white',
};

const DeviceTracker = () => {
  const [searchParams] = useSearchParams();
  const [ticketNumber, setTicketNumber] = useState(searchParams.get('ticket') || '');
  const [phone, setPhone] = useState('');
  const [ticket, setTicket] = useState<RepairTicket | null>(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const prefill = searchParams.get('ticket');
    if (prefill) {
      setTicketNumber(prefill);
      const found = findTicketByNumber(prefill);
      if (found) setTicket(found);
    }
  }, [searchParams]);

  const handleSearch = (e: FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    setTimeout(() => {
      const found = findTicketByNumber(ticketNumber, phone || undefined);
      if (found) {
        setTicket(found);
        setError('');
      } else {
        setTicket(null);
        setError('No repair ticket found. Check your ticket number and phone number.');
      }
      setLoading(false);
    }, 600);
  };

  return (
    <div className="pb-24 mesh-bg min-h-screen">
      <div className="hero-mesh py-14 md:py-20">
        <div className="container max-w-2xl text-center">
          <p className="section-eyebrow text-cta justify-center">Device Tracker Portal</p>
          <h1 className="font-bodoni text-4xl md:text-5xl font-bold text-white">Track Your Repair</h1>
          <p className="font-jost text-white/50 mt-3 text-[15px]">
            Enter your ticket number to see real-time diagnostic and repair status.
          </p>
        </div>
      </div>

      <div className="container max-w-2xl -mt-6 relative z-10">
        <form onSubmit={handleSearch} className="bg-white border border-grey-mid/60 rounded-3xl p-6 md:p-8 shadow-card space-y-4">
          <div className="space-y-2">
            <label className="font-jost text-[13px] font-bold text-primary">Ticket Number *</label>
            <input
              required
              value={ticketNumber}
              onChange={(e) => setTicketNumber(e.target.value)}
              placeholder="e.g. GPH-482910"
              className="w-full h-12 bg-grey-light border border-grey-mid rounded-xl px-4 font-jost text-[14px] outline-none focus:border-cta/50 focus:ring-2 focus:ring-cta/10"
            />
          </div>
          <div className="space-y-2">
            <label className="font-jost text-[13px] font-bold text-primary">Phone Number (optional)</label>
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="0711 106 949"
              className="w-full h-12 bg-grey-light border border-grey-mid rounded-xl px-4 font-jost text-[14px] outline-none focus:border-cta/50"
            />
          </div>
          {error && <p className="font-jost text-[13px] text-accent-red">{error}</p>}
          <button type="submit" disabled={loading} className="btn-primary w-full h-12 rounded-2xl flex items-center justify-center gap-2 disabled:opacity-60">
            {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Search className="w-4 h-4" />}
            {loading ? 'Searching...' : 'Track Device'}
          </button>
          <p className="font-jost text-[12px] text-grey-text text-center">
            Demo ticket: <button type="button" onClick={() => { setTicketNumber('GPH-482910'); setPhone('254711106949'); }} className="text-cta font-semibold hover:underline">GPH-482910</button>
          </p>
        </form>

        {ticket && (
          <div className="mt-8 bg-white border border-grey-mid/60 rounded-3xl overflow-hidden shadow-card">
            <div className="p-6 md:p-8 border-b border-grey-mid/60">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <p className="font-jost text-[11px] font-bold text-grey-text uppercase tracking-wider">Ticket</p>
                  <h2 className="font-bodoni text-2xl font-bold text-primary">{ticket.ticketNumber}</h2>
                </div>
                <span className={`font-jost text-[12px] font-bold px-4 py-1.5 rounded-full ${STATUS_COLORS[ticket.status]}`}>
                  {ticket.status}
                </span>
              </div>
              <div className="mt-4 flex items-center gap-3 text-[13px] font-jost text-secondary">
                <Smartphone className="w-4 h-4 text-cta" />
                {ticket.deviceType} · {ticket.deviceModel}
              </div>
              <p className="font-jost text-[13px] text-grey-text mt-2">{ticket.issue}</p>
            </div>

            {/* Progress bar */}
            <div className="px-6 md:px-8 py-6">
              <div className="flex justify-between mb-2">
                <span className="font-jost text-[12px] font-bold text-primary">Repair Progress</span>
                <span className="font-jost text-[12px] text-cta font-bold">{statusProgress(ticket.status)}%</span>
              </div>
              <div className="h-2 bg-grey-light rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-cta to-accent rounded-full transition-all duration-700" style={{ width: `${statusProgress(ticket.status)}%` }} />
              </div>

              <div className="mt-8 space-y-4">
                {REPAIR_STATUSES.map((status) => {
                  const currentIdx = REPAIR_STATUSES.indexOf(ticket.status);
                  const statusIdx = REPAIR_STATUSES.indexOf(status);
                  const done = statusIdx <= currentIdx;
                  const active = statusIdx === currentIdx;
                  return (
                    <div key={status} className="flex items-center gap-4">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${done ? 'bg-cta text-white' : 'bg-grey-light text-grey-text'}`}>
                        {done ? <CheckCircle2 className="w-4 h-4" /> : <Circle className="w-4 h-4" />}
                      </div>
                      <div>
                        <p className={`font-jost text-[13px] font-semibold ${active ? 'text-primary' : done ? 'text-secondary' : 'text-grey-text'}`}>{status}</p>
                        {active && ticket.notes && (
                          <p className="font-jost text-[12px] text-grey-text mt-0.5">{ticket.notes}</p>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="px-6 md:px-8 py-5 bg-grey-light/50 border-t border-grey-mid/60 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-2 font-jost text-[12px] text-grey-text">
                <Clock className="w-4 h-4" />
                Drop-off: {ticket.dropOffDate} at {ticket.dropOffTime}
              </div>
              {ticket.status === 'Ready for Pickup' && (
                <Link to="/contact" className="font-jost text-[13px] font-bold text-accent-green hover:underline">
                  Collect from {BUSINESS.address.city} →
                </Link>
              )}
            </div>
          </div>
        )}

        <p className="text-center font-jost text-[13px] text-grey-text mt-8">
          Don't have a ticket? <Link to="/book-repair" className="text-cta font-semibold hover:underline">Book a repair</Link>
        </p>
      </div>
    </div>
  );
};

export default DeviceTracker;
