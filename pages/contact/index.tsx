import emailjs from '@emailjs/browser';
import { NextPage } from 'next';
import { FormEvent, useRef, useState, LegacyRef } from 'react';
import { Layout } from '../../components/Layout';
import TopBar from '../../components/TopBar';

const Contact: NextPage = () => {
  const form = useRef<HTMLFormElement>(null);
  const [sendComplete, setSendComplete] = useState(false);

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.current) return;
      emailjs
        .sendForm(
          process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string,
          process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string,
          form.current,
          process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY as string
        )
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );
      e.currentTarget.reset();

      setSendComplete(true);
      setTimeout(() => {
        setSendComplete(false);
      }, 4000);
    };

  return (
    <Layout>
      <TopBar title="Contact" />
      <div>
        <h3 className="contact-title">Contact Us</h3>
      </div>
      <div className="formAndInfo">
        <div className="formWrap">
          <form ref={form} onSubmit={sendEmail}>
            <label>
              Name
              <input type="text" name="name" minLength={3} required />
            </label>

            <label>
              Email
              <input type="email" name="email" minLength={7} required />
            </label>

            <label>
              Message
              <textarea
                name="message"
                minLength={5}
                maxLength={200}
                rows={7}
                cols={40}
              />
            </label>

            {sendComplete && (
              <p className="complete-message">お問い合わせ完了しました。</p>
            )}
            <input type="submit" value="Send" />
          </form>
        </div>
        <div>
          <address className="InfoCard">
            <h4 className="cardheadline">Contact Info</h4>
            <hr />
            <dl className="contact-info">
              <dt>Name:</dt>
              <dd>XXXX XXXX</dd>
              <dt>Tel:</dt>
              <dd>XXXX XXXX</dd>
              <dt>Address:</dt>
              <dd>XXXX XXXX</dd>
            </dl>
          </address>
        </div>
      </div>
      <div className="map-wrapper">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3241.7479754683745!2d139.7432442152582!3d35.65858048019946!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188bbd9009ec09%3A0x481a93f0d2a409dd!2z5p2x5Lqs44K_44Ov44O8!5e0!3m2!1sja!2sjp!4v1665477584088!5m2!1sja!2sjp"
          width="600"
          height="450"
          frameBorder="0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="map"
        ></iframe>
      </div>
    </Layout>
  );
};

export default Contact;
