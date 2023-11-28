import React from 'react'
import styles from './About.module.css'
function About (): React.JSX.Element {
  return (
    <div className={styles.about}>
      <div>
        <h1 className={styles.aboutTitle}>Welcome to Binary</h1>
        <p className={styles.aboutSubtitle}>The crowdfunding site for debates</p>
      </div>
      <div className={styles.aboutSection}>
        <h1>How it works</h1>
        <p className={styles.aboutText}>Just browse our selection of debate fundraisers, and pledge as much or as little as you want to the debates that you want to see!</p>
      </div>
      <div className={styles.aboutSection}>
        <h1>Is Binary a non-profit</h1>
        <p className={styles.aboutText}>No; like many other crowdfunding platforms, Binary is a for-profit company. As such, funds donated through Binary are legally considered gifts and are thus not tax deductible. Binary charges a 5% transaction fee in order to pay for payment processor and operational fees.</p>
      </div>
      <div className={styles.aboutSection}>
        <h1>Where do donations go?</h1>
        <p className={styles.aboutText}>Donations go to charities of the debaters’ choices. Unless otherwise stated, each debater will be able to decide where half of the donations go. Charities must be US-registered 501(c)(3) organizations.</p>
      </div>
      <div className={styles.aboutSection}>
        <h1>How long do fundraisers last?</h1>
        <p className={styles.aboutText}>Anywhere from 3 months to a year. The timeline will be specified in each fundraiser.</p>
      </div>
      <div className={styles.aboutSection}>
        <h1>Are donations refundable?</h1>
        <p className={styles.aboutText}>While you have to provide your payment information when you make a pledge, you will only be charged if the debate happens. However, once you are charged, your donation is not refundable.</p>
      </div>
  </div>
  )
}

export default About
