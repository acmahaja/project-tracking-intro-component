import style from "@/styles/Menu.module.css";

export default function Menu({ display }) {
  return (
    <div className={`${style.menu} ${display ? null : style.hide}`}>
      <a className={style.link} href="#">
        Product
      </a>
      <a className={style.link} href="#">
        Features
      </a>
      <a className={style.link} href="#">
        Pricing
      </a>
      <div className={style.line} />
      <a className={`${style.link} ${style.linkMuted}`} href="#">
        Login
      </a>
    </div>
  );
}
