// "use client"
import dynamic from 'next/dynamic';
import styles from './contact.module.css'
import Image from 'next/image';

//import HydratioTest from '@/components/hydrationTest'

// const HydratioTestNoSSR = dynamic(()=> import("@/components/hydrationTest"), {ssr:false})

const ContactPage = () => {


    return (
      <div className={styles.container}>
          <div className={styles.imgContainer}>
              <Image src="/contact.png" alt="" fill/>
          </div>
          <div className={styles.formContainer}>
              
            
              <form action="" className={styles.form}>
                <input type="text" placeholder='Name and Surename'/>
                <input type="text" placeholder='Email Address'/>
                <input type="text" placeholder='Phone Number (Optional)'/>
                <textarea name="" id="" cols="30" rows="10" placeholder='Message'></textarea>
                <button>Send</button>
              </form>

          </div>

      </div>
    )
  };
  
  export default ContactPage;