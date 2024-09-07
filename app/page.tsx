import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Categories, Container, SortPopup, Title } from "@/components/shared";
import { TopBar } from "@/components/shared/top-bar";

export default function Home() {
  return (
    <>
      <Container className="mt-10">
        <Title text="Суши и пицца" size="lg" className="font-extrabold" />
      </Container>
      <TopBar />
    </>
  );
}
