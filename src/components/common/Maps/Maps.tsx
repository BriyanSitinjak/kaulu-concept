import dynamic from "next/dynamic";

const MapsSection = dynamic(() => import("@/components/hero/MapsSection/MapsSection"), {
  ssr: false,
  loading: () => <p>Loading map...</p>,
});

export default function Maps() {
  return (
    <section style={{ height: "500px" }}>
      <MapsSection />
    </section>
  );
}
