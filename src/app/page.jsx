 import styles from './home.module.css';
 import Image from "next/image";


const Home = () => {


  return <div className={styles.container}>
    
    <div className={styles.textContainer}>
      <h1 className={styles.title}>Creative Thoughts Agency.</h1>
      <p className={styles.desc}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed magna nisi. Maecenas mattis ligula suscipit porta vestibulum. Sed interdum sed quam et mattis.</p>
      <div className={styles.buttons}>
          <button className={styles.button}>Learn More</button>
          <button className={styles.button}>Contact</button>
      </div>
      <div className={styles.brands}>
        <Image src="/brands.png" alt="" fill className={styles.brandImg} />
      </div>
    </div>
    <div className={styles.imgContainer}>
      <Image src="/hero.gif" alt="" fill className={styles.herpImg} />
    </div>
  </div>;
};

export default Home;