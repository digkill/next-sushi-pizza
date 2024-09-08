import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Categories, Container, Filters, SortPopup, Title } from "@/components/shared";
import { TopBar } from "@/components/shared/top-bar";

export default function Home() {
  return (
    <>
      <Container className="mt-10">
        <Title text="Суши и пицца" size="lg" className="font-extrabold" />
      </Container>
      <TopBar />

      <Container className="mt-10 pb-14">
        <div className="flex gap-[60px]">

            {/* Filtration */}
            <div className="w-[250px]">
                <Filters />
            </div>

            {/* List goods */}
            <div className="flex-1">
                <div className="flex flex-col gap-16">
                {/*
                        <ProductsGroupList title="Суши" items={[1, 2, 3, 4, 5]} />
                    <ProductsGroupList title="Пиццы" items={[1, 2, 3, 4, 5]} />
                    <ProductsGroupList title="Комбо" items={[1, 2, 3, 4, 5]} />
                
                */}
                Список товаров
                </div>
            </div>
        </div>
      </Container>
    </>
  );
}
