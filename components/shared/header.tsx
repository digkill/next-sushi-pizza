import React from "react";
import {cn} from "@/lib/utils";
import {Container} from "@/components/shared/container";
import Image from 'next/image'
import {Button} from '@/components/ui'
import {ArrowRight, ShoppingCart, User} from "lucide-react";

interface Props {
    className?: string
}

export const Header: React.FC<Props> = ({ className }) => {
    return (
        <header className={cn('border border-b', className)}>
            <Container>
                {/* Left part */}
                <div className="flex items-center gap-4">
                    <Image src="/logo.png" alt="Logo" width={35} height={35} />
                    <div>
                        <h1 className="text-2xl uppercase font-black">Sushi Pizza</h1>
                        <p className="text-sm text-gray-400 leading-3">Aroy!</p>
                    </div>
                </div>

                {/* Right part */}
                <div className="flex items-center gap-3">
                    <Button variant="outline" className="flex items-center gap-1">
                        <User size={16} />
                        Войти
                    </Button>

                    <div>
                        <Button className="group relative">
                            <b>723 ₽</b>
                            <span className="h-full w-[1px] bg-white/30 mx-3" />
                            <div className="flex items-center gap-1 transaction duration-300 group-hover:opacity-0">
                                <ShoppingCart className="h-4 w-4 relative" strokeWidth={2} />
                                <b>3</b>
                            </div>
                            <ArrowRight
                                size={20}
                                className="absolute right-5 transition duration-300 -translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0"
                            />
                        </Button>
                    </div>
                </div>
            </Container>
        </header>
    )
}