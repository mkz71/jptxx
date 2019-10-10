import React from 'react';
import { Helmet } from 'react-helmet';
import Layout from '../components/Layout/layout.js';
import styles from '../styles/menu.module.css';

const Menu = () => (
  <Layout>
    <Helmet>
      <title>JP Thai Express</title>
      <meta
        name='description'
        content='JP Thai Express is the Jamaica Plain, MA area’s best restaurant for 
                take-out and delivery of authentic Thai food. Since 2019, our family-owned 
                and operated restaurant serves a delectable menu that boasts over 125 dishes.'
      />
    </Helmet>

    <section className={styles.contactContainer}>
      <div className={styles.about}>
        <section className={styles.aboutInfo}>
          {/*  */}
          <h1 className={styles.contactHeader}>
            Appetizers $5.50
          </h1>
          <p className={styles.aboutParagraph}>
            <b>VEGGIE SPRING ROLL</b>
            <br/>Crispy Thai veggie spring rolls with sweet sauce.
          </p>
          <p className={styles.aboutParagraph}>
            <b>CHICKEN SATAY +$1</b>
            <br/>Grilled chicken on skewers marinated in Thai herb and coconut milk with peanut sauce.
          </p>
          <p className={styles.aboutParagraph}>
            <b>RAVIOLI DELIGHT (Steamed or Fried)</b>
            <br/>Seasoned shrimp and pork dumplings with sweet ginger sauce.
          </p>
          <p className={styles.aboutParagraph}>
            <b>CURRY PUFF +$2</b>
            <br/>Crispy small pie consisting of curry powder with onion, carrot, corn, potato with sweet sauce.
          </p>
          <p className={styles.aboutParagraph}>
            <b>CHICKEN NUGGETS</b>
            <br/>Fried chicken nuggets with sweet sauce.
          </p>
          <p className={styles.aboutParagraph}>
            <b>CHIVE DUMPLING +$1</b>
            <br/>Fried veggie chive dumpling in thick dough with sweet soy sauce.
          </p>
          <p className={styles.aboutParagraph}>
            <b>CRISPY CRAB WONTON</b>
            <br/>Fried crispy wonton filled with imitation crab meat and cream cheese with sweet sauce.
          </p>
          <p className={styles.aboutParagraph}>
            <b>SCALLION PANCAKE</b>
            <br/>Pan fried vegetarian pancakes with bits of scallions with peanut sauce.
          </p>
          <p className={styles.aboutParagraph}>
            <b>CHICKEN WINGS +$1</b>
            <br/>Fried chicken wings with sweet sauce.
          </p>
          <p className={styles.aboutParagraph}>
            <b>CRISPY TOFU</b>
            <br/>Golden fried tofu with sweet sauce and grounded peanuts.
          </p>
          <p className={styles.aboutParagraph}>
            <b>FISH TOD MUN* +$1</b>
            <br/>Fish cake with ground fish mixed with green beans, egg in red curry paste with sweet sauce.
          </p>
          <p className={styles.aboutParagraph}>
            <b>LARB LETTUCE WRAP*
            <br/>(Chicken, Tofu) +$3</b>
            <br/>Choice of meat with spicy lime juice, red onion, lemongrass, grounded rice toasted, scallion, cilantro with lettuce.
          </p>
          <p className={styles.aboutParagraph}>
            <b>SPICY YUM BEEF* +$4</b>
            <br/>Grilled beef in spicy lime juice with red onion, lemongrass, lettuce, tomato, grounded rice toasted, scallion, cilantro.
          </p>
          {/*  */}
          <h1 className={styles.contactHeader}>
            <br/>Soups $4.25
          </h1>
          <p className={styles.aboutParagraph}>
            <b>(Meatless) +$0.00 (Chicken) +$0.50
            <br/>(Veggie) +$0.75 (Shrimp) +$1.25</b>
          </p>
          <p className={styles.aboutParagraph}>
            <b>TOM YUM SOUP*</b>
            <br/>Thai style hot & sour soup with lemongrass, lime juice, mushroom.
          </p>
          <p className={styles.aboutParagraph}>
            <b>COCONUT SOUP</b>
            <br/>Thai style coconut soup with coconut milk, galangal, lemon juice.
          </p>
          <p className={styles.aboutParagraph}>
            <b>VEGGIE SOUP (no choice of meat)</b>
            <br/>Mixed veggie in a clear veggie broth.
          </p>
          {/*  */}
          <h1 className={styles.contactHeader}>
            <br/>Noodles & Fried Rice $8.25
          </h1>
          <p className={styles.aboutParagraph}>
            <b>Add a Fried Egg on Top +$2
            <br/>Choice 1 of Proteins..
            <br/>(Meatless) +$0.00 (Chicken, Tofu) +$0.75 (Pork, Veggie) +$1.25
            <br/>(Beef, Shrimp, Crispy Chicken) +$2.75 (Vegan Meat) +3.50</b>
          </p>
          <p className={styles.aboutParagraph}>
            <b>-Noodles-</b>
          </p>
          <p className={styles.aboutParagraph}>
            <b>PAD THAI NOODLES</b>
            <br/>Rice noodles with egg, bean sprout, turnip, scallion, ground peanut in house Pad Thai sauce.
          </p>
          <p className={styles.aboutParagraph}>
            <b>DRUNKEN NOODLES*</b>
            <br/>Flat rice noodles with egg, onion, bamboo shoots, basil leaves, bell pepper in a spicy drunken sauce.
          </p>
          <p className={styles.aboutParagraph}>
            <b>PAD SEE EW NOODLES</b>
            <br/>Flat rice noodles with egg, Chinese broccoli in sweet soy sauce.
          </p>
          <p className={styles.aboutParagraph}>
            <b>JP BASIL NOODLES*</b>
            <br/>Rice rice noodles with bell pepper, green beans, basil leaves in house chili sauce.
          </p>
          <p className={styles.aboutParagraph}>
            <b>-Fried Rice-</b>
          </p>
          <p className={styles.aboutParagraph}>
            <b>MANGO FRIED RICE</b>
            <br/>Fried rice with egg, mango chunks, onion, carrots, green peas in house soy sauce.
          </p>
          <p className={styles.aboutParagraph}>
            <b>PINEAPPLE FRIED RICE</b>
            <br/>Fried rice with egg, pineapple, onion, scallion, raisin, carrot, baby corn in Thai curry powder.
          </p>
          <p className={styles.aboutParagraph}>
            <b>BASIL FRIED RICE*</b>
            <br/>Fried rice with egg, onion,bell pepper, basil leaves in our spicy basil chili sauce.
          </p>
          <p className={styles.aboutParagraph}>
            <b>PIK-POW FRIED RICE*</b>
            <br/>Fried rice with basil leaves, onions, bell pepper in Pik-Pow chili paste.
          </p>
          {/*  */}
          <h1 className={styles.contactHeader}>
            <br/>Stir-fried & Curry $8.75
          </h1>
          <p className={styles.aboutParagraph}>
            <b>Served with White Rice
            <br/>Add a Fried Egg on Top +$2
            <br/>Choice 1 of Proteins..
            <br/>(Meatless) +$0.00 (Chicken, Tofu) +$0.75 (Pork, Veggie) +$1.25
            <br/>(Beef, Shrimp, Crispy Chicken) +$2.75 (Vegan Meat) +3.50</b>
          </p>
          <p className={styles.aboutParagraph}>
            <b>-Stir-fried-</b>
          </p>
          <p className={styles.aboutParagraph}>
            <b>HOT BASIL*</b>
            <br/>Stir-fried chili basil sauce with mushroom, bell pepper, onion, basil leaves.
          </p>
          <p className={styles.aboutParagraph}>
            <b>SWEET & SOUR</b>
            <br/>Stir-fried sweet & sour sauce with pineapple, snow peas, carrot, onion, bell pepper.
          </p>
          <p className={styles.aboutParagraph}>
            <b>SPICY EGGPLANT*</b>
            <br/>Stir-fried chili garlic sauce with eggplant, bell pepper, jalapeno, basil leaves.
          </p>
          <p className={styles.aboutParagraph}>
            <b>BROCCOLI STIR-FRIED</b>
            <br/>Stir-fried light brown sauce with broccoli, mushroom, carrot.
          </p>
          <p className={styles.aboutParagraph}>
            <b>GINGER & SCALLION</b>
            <br/>Stir-fried with baby corn, onions, mushrooms, scallion, shredded ginger.
          </p>
          <p className={styles.aboutParagraph}>
            <b>CHILI PIK-POW*</b>
            <br/>Stir-fried Pik-Pow chili paste with mushrooms, bamboo shoots, bell pepper, baby corn, snow peas.
          </p>
          <p className={styles.aboutParagraph}>
            <b>-Curry-</b>
          </p>
          <p className={styles.aboutParagraph}>
            <b>RED CURRY*</b>
            <br/>Red coconut curry with eggplant, bamboo shoot, bell peppers, basil leaves.
          </p>
          <p className={styles.aboutParagraph}>
            <b>MANGO YELLOW CURRY*</b>
            <br/>Yellow coconut curry with mango chunks, green peas, onions, snow peas, bell peppers.
          </p>
          <p className={styles.aboutParagraph}>
            <b>MASSAMAN CURRY*</b>
            <br/>Thai coconut curry with carrot, onion, potato, peanut.
          </p>
          {/*  */}
          <h1 className={styles.contactHeader}>
            <br/>Authentic Thai $8.50
          </h1>
          <p className={styles.aboutParagraph}>
            <b>Add a Fried Egg on Top +$2</b>
          </p>
          <p className={styles.aboutParagraph}>
            <b>-Over Rice-</b>
          </p>
          <p className={styles.aboutParagraph}>
            <b>KHAO BAI KAPOW*
            <br/>(Chicken) +$0.75 (Pork) +$1.25
            <br/>(Beef, Shrimp, Roasted Pork, Crispy Chicken, Crispy Pork Belly) +$2.75</b>
            <br/>Stir-fried Thai chili basil sauce with green beans, bell pepper, holy basil leaves over rice.
          </p>
          <p className={styles.aboutParagraph}>
            <b>KHAO KATIEM PRIK THAI
            <br/>(Chicken) +$0.75 (Pork) +$1.25 (Beef, Shrimp) +$2.75</b>
            <br/>Stir-fried in garlic & pepper sauce with mushroom over rice.
          </p>
          <p className={styles.aboutParagraph}>
            <b>KHAO MED PRIK THAI ON*
            <br/>(Pork) +$1.25 (Crispy Pork Belly) +$2.75</b>
            <br/>Stir-fried Thai chili paste with basil leaves, bell pepper, rhizome, peppercorn over rice.
          </p>
          <p className={styles.aboutParagraph}>
            <b>KHAO PANANG CURRY*
            <br/>(Chicken, Tofu) +$0.75 (Pork) +$1.25
            <br/>(Beef, Shrimp, Crispy Chicken) +$2.75</b>
            <br/>Red Panang coconut curry with lime leaves, basil leaves, bamboo shoots, baby corn, green peas, bell peppers over rice.
          </p>
          <p className={styles.aboutParagraph}>
            <b>KHAO PIK-KHING*
            <br/>(Chicken, Tofu) +$0.75 (Pork) +$1.25
            <br/>(Beef, Shrimp, Crispy Chicken, Crispy Pork Belly) +$2.75</b>
            <br/>Stir-fried Pik-Khing chili sauce with green bean over rice.
          </p>
          <p className={styles.aboutParagraph}>
            <b>THAI OMELET OVER RICE
            <br/>(Chicken) +$0.75 (Pork, Veggie) +$1.25 (Shrimp) +$2.75</b>
            <br/>Thai style omelet mixed with choice of meat, scallion, cilantro over rice.
          </p>
          <p className={styles.aboutParagraph}>
            <b>ROASTED PORK OVER RICE +$3.25
            <br/>CRISPY CHICKEN OVER RICE +$3.25</b>
            <br/>Roasted pork or crispy chicken with crispy pork belly topped with sweet red soybean gravy, boiled egg over rice.
          </p>
          <p className={styles.aboutParagraph}>
            <b>THAI BBQ OVER RICE
            <br/>(BBQ Chicken or BBQ Pork) +$2.75</b>
            <br/>Thai style barbeque choice of meat with lettuce, sweet chili sauce over rice.
          </p>
          <p className={styles.aboutParagraph}>
            <b>BRAISED PORK OVER RICE +$3.25</b>
            <br/>Thai style braised pork with bok choy, cilantro, scallion, boiled egg over rice.
          </p>
          <p className={styles.aboutParagraph}>
            <b>-Noodles-</b>
          </p>
          <p className={styles.aboutParagraph}>
            <b>KHAO SOI GAI* +$0.75</b>
            <br/>Curry egg noodles with chicken, red onion, chili paste, scallions, cilantro.
          </p>
          <p className={styles.aboutParagraph}>
            <b>BA MEE HAENG
            <br/>(Roasted Pork, Crispy Chicken, Crispy Pork Belly ) +$2.75</b>
            <br/>Egg noodles with crispy wonton skin, fishcake, grounded pork, lettuce, grounded peanuts, bok choy, fried garlic, scallions, cilantro.
          </p>
          <p className={styles.aboutParagraph}>
            <b>LEK HAENG
            <br/>(Roasted Pork, Crispy Chicken, Crispy Pork Belly ) +$2.75</b>
            <br/>R ice noodles mixed in sweet soy sauce with crispy wonton skins, fishcake, grounded pork, lettuce , grounded peanuts, bok choy , bean sprouts , fried
garlic, scallion, cilantro.
          </p>
          {/*  */}
          <h1 className={styles.contactHeader}>
            <br/>Side Orders
          </h1>
          <p className={styles.aboutParagraph}>
            <b>White Rice $1.75
              <br/>Steamed Rice Noodles $1.75
              <br/>Steamed Veggie $3.75
              <br/>Peanut Sauce $1.25
              <br/>Chili Fish Sauce $0.75
              <br/>Hot Sauce $0.10
              <br/>Sweet Sauce $0.10
              <br/>Soy Sauce $0.10</b>
          </p>
          {/*  */}
          <h1 className={styles.contactHeader}>
            <br/>Drinks
          </h1>
          <p className={styles.aboutParagraph}>
            <b>Can of soda (Coke, Diet Coke, Gingle Ale) $1.75
              <br/>Bottle of Water $1.75
              <br/>Thai Ice Tea $4.25</b>
          </p>
          {/*  */}
          <p className={styles.aboutParagraph}>
          <br/><br/>* Spicy
          <br/><br/>Subject to Mass meal tax. Subject and prices may be changed without notice.
          <br/><br/>Reminder: Some items are cooked to order and may be served raw or undercooked. Consuming raw or undercooked meats, poultry, seafood, shellfish or eggs may increase risk of foodborne illness.
          <br/><br/>Before placing your order, please inform your server if a person in your party has a food allergy.
          </p>
        </section>
      </div>
    </section>
  </Layout>
);

export default Menu;