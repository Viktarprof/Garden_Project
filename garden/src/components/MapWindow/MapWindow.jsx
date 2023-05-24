function MapWindow() {
  return (
    <div style={{ width: "100%" }}>
      <iframe
        title="GoogleMaps"
        style={{
          width: "100%",
          height: "525px",
          border: "0",
          scrolling: "no",
          marginHeight: "0",
          marginWidth: "0"
        }}
        src="https://maps.google.com/maps?width=100%25&amp;height=525&amp;hl=en&amp;q=Tel-Ran.de%20GmbH+(My%20Business%20Name)&amp;t=&amp;z=16&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
      ></iframe>
    </div>
  );
}

export default MapWindow;
