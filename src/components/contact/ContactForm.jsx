'use client';

import React, { useState } from 'react';

export default function ContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        orderNumber: '',
        subject: '',
        message: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-6 font-mono text-xs uppercase tracking-wider">
            <h2 className="text-2xl sm:text-3xl font-extrabold font-sans uppercase tracking-tight text-zinc-900 dark:text-white mb-6">
                SEND A MESSAGE
            </h2>

            {/* NAME */}
            <div className="space-y-2">
                <label className="block text-zinc-500 dark:text-zinc-400">NAME</label>
                <input
                    type="text"
                    required
                    placeholder="YOUR NAME"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 bg-zinc-50 dark:bg-zinc-950 border border-zinc-300 dark:border-zinc-800 text-zinc-900 dark:text-white placeholder-zinc-400 dark:placeholder-zinc-600 focus:outline-none focus:border-red-600 transition-colors"
                />
            </div>

            {/* EMAIL */}
            <div className="space-y-2">
                <label className="block text-zinc-500 dark:text-zinc-400">EMAIL</label>
                <input
                    type="email"
                    required
                    placeholder="YOU@EMAIL.COM"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 bg-zinc-50 dark:bg-zinc-950 border border-zinc-300 dark:border-zinc-800 text-zinc-900 dark:text-white placeholder-zinc-400 dark:placeholder-zinc-600 focus:outline-none focus:border-red-600 transition-colors"
                />
            </div>

            {/* ORDER NUMBER (OPTIONAL) */}
            <div className="space-y-2">
                <label className="block text-zinc-500 dark:text-zinc-400">ORDER NUMBER (OPTIONAL)</label>
                <input
                    type="text"
                    placeholder="LEAVE BLANK IF NO ORDER"
                    value={formData.orderNumber}
                    onChange={(e) => setFormData({ ...formData, orderNumber: e.target.value })}
                    className="w-full px-4 py-3 bg-zinc-50 dark:bg-zinc-950 border border-zinc-300 dark:border-zinc-800 text-zinc-900 dark:text-white placeholder-zinc-400 dark:placeholder-zinc-600 focus:outline-none focus:border-red-600 transition-colors"
                />
            </div>

            {/* SUBJECT */}
            <div className="space-y-2">
                <label className="block text-zinc-500 dark:text-zinc-400">SUBJECT</label>
                <select
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-3 bg-zinc-50 dark:bg-zinc-950 border border-zinc-300 dark:border-zinc-800 text-zinc-900 dark:text-white focus:outline-none focus:border-red-600 transition-colors cursor-pointer"
                >
                    <option value="" disabled>SELECT A SUBJECT</option>
                    <option value="order">ORDER STATUS & SHIPPING</option>
                    <option value="returns">RETURNS & EXCHANGES</option>
                    <option value="sizing">SIZING HELP</option>
                    <option value="collab">COLLABORATION / PRESS</option>
                    <option value="other">OTHER ENQUIRIES</option>
                </select>
            </div>

            {/* MESSAGE */}
            <div className="space-y-2">
                <label className="block text-zinc-500 dark:text-zinc-400">MESSAGE</label>
                <textarea
                    rows={5}
                    required
                    placeholder="TELL US EVERYTHING."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 bg-zinc-50 dark:bg-zinc-950 border border-zinc-300 dark:border-zinc-800 text-zinc-900 dark:text-white placeholder-zinc-400 dark:placeholder-zinc-600 focus:outline-none focus:border-red-600 transition-colors resize-none"
                />
            </div>

            {/* SUBMIT BUTTON */}
            <button
                type="submit"
                className="w-full py-4 bg-red-600 hover:bg-red-700 text-white font-bold tracking-widest uppercase transition-all duration-200 inline-flex items-center justify-center gap-2 group"
            >
                <span>SEND MESSAGE</span>
                <span className="transition-transform group-hover:translate-x-1">&rarr;</span>
            </button>
        </form>
    );
}
