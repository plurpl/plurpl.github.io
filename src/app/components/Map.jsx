import React from "react";

const Map = () => {
  return (
    <div className="map-container">
      <div className="individual-maps">
        <div className="map-item">
          <div className="map-embed">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2600.269141029005!2d-123.16159289999999!3d49.3281231!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54866e1068bda72f%3A0x8c43a3a8f0f21d7!2s1760%20Marine%20Dr%20%23210%2C%20West%20Vancouver%2C%20BC%20V7V%201J1!5e0!3m2!1sen!2sca!4v1755388983468!5m2!1sen!2sca"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="West Vancouver Branch"
            ></iframe>
          </div>
        </div>

        <div className="map-item">
          <div className="map-embed">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2614.416785901485!2d-122.8007739231396!3d49.059711786517234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5485c4b70a1e9437%3A0xfe17a78a8299517b!2s15300%20Croydon%20Dr%2C%20Surrey%2C%20BC%20V3Z%200Z5!5e0!3m2!1sen!2sca!4v1755389058694!5m2!1sen!2sca"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="South Surrey Branch"
            ></iframe>
          </div>
        </div>

        <div className="map-item">
          <div className="map-embed">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5211.103853738142!2d-122.99934572313225!3d49.22802417462266!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54867659bd0ea1f5%3A0x516b36fd9106a2d8!2s4789%20Kingsway%2C%20Burnaby%2C%20BC%20V5H%200A3!5e0!3m2!1sen!2sca!4v1755389110897!5m2!1sen!2sca"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Burnaby Branch"
            ></iframe>
          </div>
        </div>
      </div>
      <div className="map-locations">
        <div className="map-location-item">
          <h4>West Vancouver Branch</h4>
          <p>210-1760 Marine Dr, West Vancouver, BC</p>
        </div>
        <div className="map-location-item">
          <h4>South Surrey Branch</h4>
          <p>300-15300 Croydon Dr, South Surrey BC</p>
        </div>
        <div className="map-location-item">
          <h4>Burnaby Branch</h4>
          <p>200-4789 Kingsway, Burnaby, BC</p>
        </div>
      </div>
    </div>
  );
};

export default Map;
