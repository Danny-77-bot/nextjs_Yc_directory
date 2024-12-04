import SearchForm from "@/components/SearcForm";
import Image from "next/image";

export default async function Home ({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) {
  const query = (await searchParams).query;
  return (
     <>
         <section className="black_container">
         <h1 className="heading">
  Present Your Startup, <br />
  Network with Innovators
</h1>

<p className="sub-heading !max-w-3xl">
  Share Concepts, Support Ideas, and Shine in Online Challenges.
</p>


        <SearchForm query={query} />  
      </section>
     </>
  );
}
