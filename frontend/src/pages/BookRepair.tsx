import { useState } from 'react';
import type { FormEvent } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, Smartphone, CheckCircle2, ArrowRight } from 'lucide-react';
import { createRepairTicket } from '../lib/repairs';
import { BUSINESS } from '../lib/business';

const DEVICE_TYPES = ['Phone', 'Laptop', 'Tablet', 'Smartwatch', 'Other'];
const TIME_SLOTS = ['9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM'];

const BookRepair = () => {
  const [submitted, setSubmitted] = useState(false);
  const [ticketNumber, setTicketNumber] = useState('');
  const [form, setForm] = useState({
    customerName: '',
    customerPhone: '',
    customerEmail: '',
    deviceType: 'Phone',
    deviceModel: '',
    issue: '',
    dropOffDate: '',
    dropOffTime: '10:00 AM',
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const ticket = createRepairTicket(form);
    setTicketNumber(ticket.ticketNumber);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center px-4 pb-24">
        <div className="max-w-md w-full text-center bg-white border border-grey-mid/60 rounded-3xl p-10 shadow-card">
          <div className="w-16 h-16 bg-accent-green/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="w-8 h-8 text-accent-green" />
          </div>
          <h1 className="font-bodoni text-2xl font-bold text-primary">Booking Confirmed!</h1>
          <p className="font-jost text-[14px] text-grey-text mt-3">
            Your repair ticket <strong className="text-primary">{ticketNumber}</strong> has been created. We'll send SMS/WhatsApp updates as we progress.
          </p>
          <div className="flex flex-col gap-3 mt-8">
            <Link to={`/track-repair?ticket=${ticketNumber}`} className="btn-primary flex items-center justify-center gap-2">
              Track Your Device <ArrowRight className="w-4 h-4" />
            </Link>
            <Link to="/repairs" className="font-jost text-[13px] text-cta font-semibold hover:underline">
              Back to Repair Services
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="pb-24 mesh-bg">
      <div className="bg-white border-b border-grey-mid/60 py-12">
        <div className="container max-w-2xl">
          <p className="section-eyebrow">Online Booking</p>
          <h1 className="section-title">Book a Repair</h1>
          <p className="font-jost text-secondary mt-2">
            Select your device, describe the issue, and pick a drop-off time at our {BUSINESS.address.city} shop. Free diagnostic included.
          </p>
        </div>
      </div>

      <div className="container max-w-2xl py-10">
        <form onSubmit={handleSubmit} className="bg-white border border-grey-mid/60 rounded-3xl p-8 md:p-10 space-y-6 shadow-card">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="space-y-2">
              <label className="font-jost text-[13px] font-bold text-primary">Full Name *</label>
              <input required value={form.customerName} onChange={(e) => setForm({ ...form, customerName: e.target.value })} className="w-full h-11 bg-grey-light border border-grey-mid rounded-xl px-4 font-jost text-[14px] outline-none focus:border-cta/50 focus:ring-2 focus:ring-cta/10" placeholder="John Kamau" />
            </div>
            <div className="space-y-2">
              <label className="font-jost text-[13px] font-bold text-primary">Phone Number *</label>
              <input required type="tel" value={form.customerPhone} onChange={(e) => setForm({ ...form, customerPhone: e.target.value })} className="w-full h-11 bg-grey-light border border-grey-mid rounded-xl px-4 font-jost text-[14px] outline-none focus:border-cta/50 focus:ring-2 focus:ring-cta/10" placeholder="0711 106 949" />
            </div>
          </div>

          <div className="space-y-2">
            <label className="font-jost text-[13px] font-bold text-primary">Email</label>
            <input type="email" value={form.customerEmail} onChange={(e) => setForm({ ...form, customerEmail: e.target.value })} className="w-full h-11 bg-grey-light border border-grey-mid rounded-xl px-4 font-jost text-[14px] outline-none focus:border-cta/50" placeholder="john@example.com" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="space-y-2">
              <label className="font-jost text-[13px] font-bold text-primary">Device Type *</label>
              <select required value={form.deviceType} onChange={(e) => setForm({ ...form, deviceType: e.target.value })} className="w-full h-11 bg-grey-light border border-grey-mid rounded-xl px-4 font-jost text-[14px] outline-none focus:border-cta/50 cursor-pointer">
                {DEVICE_TYPES.map((t) => <option key={t}>{t}</option>)}
              </select>
            </div>
            <div className="space-y-2">
              <label className="font-jost text-[13px] font-bold text-primary">Device Model *</label>
              <input required value={form.deviceModel} onChange={(e) => setForm({ ...form, deviceModel: e.target.value })} className="w-full h-11 bg-grey-light border border-grey-mid rounded-xl px-4 font-jost text-[14px] outline-none focus:border-cta/50" placeholder="e.g. iPhone 14 Pro, MacBook Air M2" />
            </div>
          </div>

          <div className="space-y-2">
            <label className="font-jost text-[13px] font-bold text-primary">Describe the Issue *</label>
            <textarea required rows={4} value={form.issue} onChange={(e) => setForm({ ...form, issue: e.target.value })} className="w-full bg-grey-light border border-grey-mid rounded-xl px-4 py-3 font-jost text-[14px] outline-none focus:border-cta/50 resize-none" placeholder="Cracked screen, won't charge, water damage..." />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="space-y-2">
              <label className="font-jost text-[13px] font-bold text-primary flex items-center gap-2">
                <Calendar className="w-4 h-4 text-cta" /> Drop-off Date *
              </label>
              <input required type="date" min={new Date().toISOString().slice(0, 10)} value={form.dropOffDate} onChange={(e) => setForm({ ...form, dropOffDate: e.target.value })} className="w-full h-11 bg-grey-light border border-grey-mid rounded-xl px-4 font-jost text-[14px] outline-none focus:border-cta/50" />
            </div>
            <div className="space-y-2">
              <label className="font-jost text-[13px] font-bold text-primary flex items-center gap-2">
                <Clock className="w-4 h-4 text-cta" /> Drop-off Time *
              </label>
              <select required value={form.dropOffTime} onChange={(e) => setForm({ ...form, dropOffTime: e.target.value })} className="w-full h-11 bg-grey-light border border-grey-mid rounded-xl px-4 font-jost text-[14px] outline-none focus:border-cta/50 cursor-pointer">
                {TIME_SLOTS.map((t) => <option key={t}>{t}</option>)}
              </select>
            </div>
          </div>

          <div className="flex items-start gap-3 p-4 bg-emerald-50 border border-emerald-100 rounded-2xl">
            <Smartphone className="w-5 h-5 text-accent-green shrink-0 mt-0.5" />
            <p className="font-jost text-[12px] text-secondary leading-relaxed">
              <strong className="text-primary">Drop off at:</strong> {BUSINESS.address.full}. Free diagnostic. You'll receive automated SMS/WhatsApp updates when repair starts and when ready for collection.
            </p>
          </div>

          <button type="submit" className="btn-primary w-full h-12 rounded-2xl flex items-center justify-center gap-2 text-[15px]">
            Confirm Booking <ArrowRight className="w-4 h-4" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default BookRepair;
