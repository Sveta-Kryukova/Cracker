export const Footer = () => {
  return (
    <div id='footer' className="footer">
      <div className="footer__phone-block">
        <h3 className="footer__phone-block__title">phone</h3>
        <a className="footer__phone-block__content" href="+38 (099) 999-99-99">+38 (099) 999-99-99</a>
      </div>

      <div className="footer__address-block">
        <h3 className="footer__address-block__title">address</h3>
        <a className="footer__address-block__content"
          href="https://www.google.com/maps/place/400+1st+Ave+NE,+Minneapolis,+MN+55414,+%D0%A1%D0%A8%D0%90/@44.9894928,-93.2578455,17z/data=!3m1!4b1!4m5!3m4!1s0x52b32d78f3e7686b:0x57df6d8df032f461!8m2!3d44.9894928!4d-93.2556568"
        target="_blank">
          Cracker Inc.
          10 Cloverfield Lane
          Berlin IL 10928, Germany
        </a>
      </div>

      <div className="footer__share-block">
        <h3 className="footer__share-block__title">share</h3>
        <div className="footer__share-block__content">
          <div className="footer__share-block__content__item">
            <div className="footer__share-block__content__item__pinterest" />
            <p className="footer__share-block__content__item__text">pinterest.com</p>
            </div>

            <div className="footer__share-block__content__item">
              <div className="footer__share-block__content__item__facebook" />
              <p className="footer__share-block__content__item__text">facebook.com</p>
            </div>

            <div className="footer__share-block__content__item">
              <div className="footer__share-block__content__item__instagram" />
              <p className="footer__share-block__content__item__text">instagram.com</p>
            </div>
        </div>
      </div>
    </div>
  );
}