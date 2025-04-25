
import React from 'react';
import { MapPin, Clock } from 'lucide-react';

const LocationWithMap = () => {
  return (
    <div className="text-white space-y-4">
      {/* Location Info */}
      <div className="flex items-start space-x-3">
        <MapPin className="text-[#6366f1] w-6 h-6 mt-1" />
        <div>
          <h3 className="text-lg font-semibold text-white">My Location</h3>
          <p className="text-sm text-gray-300">Gumla, Jharkhand, India</p>
        </div>
      </div><br />

      {/* Timezone Info */}
      <div className="flex items-start space-x-3">
        <Clock className="text-[#6366f1] w-6 h-6 mt-1" />
        <div>
          <h3 className="text-lg font-semibold text-white">Timezone</h3>
          <p className="text-sm text-gray-300">GMT +05:30 (IST)</p>
        </div>
      </div> <br />

      {/* Map */}
      <div className="mt-4 rounded-xl overflow-hidden border border-white/10">
        <iframe
          title="My Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3683.4893484002196!2d84.54128741495591!3d23.042967284943393!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f479c4a2f041a1%3A0x4c6e34c0e9142e3b!2sGumla%2C%20Jharkhand%20835307!5e0!3m2!1sen!2sin!4v1680012000000!5m2!1sen!2sin"
          width="100%"
          height="800"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default LocationWithMap;
