import { Branch } from "./ui";
import InView from "./InView";

/**
 * Ľudová ozdoba na pravom okraji sekcie: vetvička rastie spoza okraja obrazovky a pod ňou je veľký kvet.
 * Sekcia potrebuje `relative` a `overflow-x-clip`, obsah sekcie `relative z-1` (aby bol nad ozdobou). Animácia začne, až keď ozdoba príde do obrazovky.
 */
export default function EdgeOrnament({ className = "" }: { className?: string }) {
  return (
    <InView
      className={`pointer-events-none absolute right-0 z-0 aspect-[3/4] w-[clamp(120px,16vw,260px)] max-lg:opacity-40 ${className}`}
    >
      <div aria-hidden="true" className="absolute inset-0">
        <Branch delay={0.2} className="absolute top-0 -right-[22%] w-full -scale-x-100 rotate-12" />
        <div className="absolute -right-[34%] bottom-0 w-[78%] animate-k-pop" style={{ animationDelay: "1.4s" }}>
          <img src="/svg/flower-big.svg" alt="" className="block w-full animate-[spin_60s_linear_infinite]" />
        </div>
        <img
          src="/svg/flower.svg"
          alt=""
          className="absolute bottom-[4%] left-[22%] w-[18%] animate-k-pop"
          style={{ animationDelay: "1.6s" }}
        />
      </div>
    </InView>
  );
}
