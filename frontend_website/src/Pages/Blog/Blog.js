import React from 'react';
import blogStyle from '../../Pages/Blog/Blog.module.css';

import blogHero from '../Blog/images/blog-hero.jpg';
import profile from '../Blog/images/profile.png';
import blogImg1 from '../Blog/images/blogimg1.jpg';
import blogImg2 from '../Blog/images/blogimg2.jpg';
import blogImg3 from '../Blog/images/blogimg3.jpg';
import newsLetterImg from '../Blog/images/newsletter-img.png';

// const cardHeader = "Get In Touch Today!"
// const cardCaption = "We want to hear from you. Let us know how we can help.We want to hear from you. Let us know how we can help.We want to hear from you. Let us know how we can help."

const Blog = () => {
  return (
    <div className={blogStyle.Blog}>
      <div className={blogStyle.blogHero}>
        <h2>Blog</h2>
        <h1>OPS PAD BLOG</h1>
        <p>
          Stories from the community to help you have a better experience with
          OpsPad.
        </p>
        <div className={blogStyle.blogHeroImg}>
          <img src={blogHero} alt='' />
        </div>
      </div>

      <div className={blogStyle.blogPost}>
        <h1>Latest Articles</h1>
        <div className={blogStyle.blogPostCard}>
          <div className={blogStyle.card}>
            <div className={blogStyle.cardImage}>
              <img src={blogImg1} alt='' />
            </div>
            <h2>HOW WE USE DATA</h2>
            <div className={blogStyle.blogCaption}>
              <p>
                Learn more about what kind of data we use and how we use it.
                <span>Read More</span>
              </p>
            </div>
            <div className={blogStyle.profile}>
              <img src={profile} alt='profile' />
              <div className={blogStyle.profileInfo}>
                <h2>Blessing Smith</h2>
                <p>October 20, 2022</p>
              </div>
            </div>
          </div>

          <div className={blogStyle.card}>
            <div className={blogStyle.cardImage}>
              <img src={blogImg2} alt='' />
            </div>
            <h2>BEHIND THE FEATURE: Add and Delete servers</h2>
            <div className={blogStyle.blogCaption}>
              <p>
                Team Sandpaper on the complexities of sorting servers and
                designing specialized UIs for OpsPad. <span>Read More</span>
              </p>
            </div>
            <div className={blogStyle.profile}>
              <img src={profile} alt='profile' />
              <div className={blogStyle.profileInfo}>
                <h2>Chris Arthur</h2>
                <p>October 10,2022</p>
              </div>
            </div>
          </div>

          <div className={blogStyle.card}>
            <div className={blogStyle.cardImage}>
              <img src={blogImg3} alt='' />
            </div>
            <h2>BUILDING WITH CONFIDENCE</h2>
            <div className={blogStyle.blogCaption}>
              <p>
                OpsPad has become the No1 DevOps tool according the DevOps
                Community, Nigeria. <span>Read More</span>
              </p>
            </div>
            <div className={blogStyle.profile}>
              <img src={profile} alt='profile' />
              <div className={blogStyle.profileInfo}>
                <h2>Oreolu Grace</h2>
                <p>October 29, 2022</p>
              </div>
            </div>
          </div>

          <div className={blogStyle.card}>
            <div className={blogStyle.cardImage}>
              <img src={blogImg1} alt='' />
            </div>
            <h2>WHAT’S NEW IN OpsPad v3.0 : NOV 2022</h2>
            <div className={blogStyle.blogCaption}>
              <p>
                An insight of the latest feature, fixes and finesse we've added
                to OpsPad.<span>Read More</span>
              </p>
            </div>
            <div className={blogStyle.profile}>
              <img src={profile} alt='profile' />
              <div className={blogStyle.profileInfo}>
                <h2>Amazing Tilt</h2>
                <p>November 9, 2022.</p>
              </div>
            </div>
          </div>

          <div className={blogStyle.card}>
            <div className={blogStyle.cardImage}>
              <img src={blogImg2} alt='' />
            </div>
            <h2>HOW TO SET UP YOUR OpsPad</h2>
            <div className={blogStyle.blogCaption}>
              <p>
                Set up your OpsPad like a pro in 5 steps.<span>Read More.</span>
              </p>
            </div>
            <div className={blogStyle.profile}>
              <img src={profile} alt='profile' />
              <div className={blogStyle.profileInfo}>
                <h2>John Cena.</h2>
                <p>November 19, 2022.</p>
              </div>
            </div>
          </div>

          <div className={blogStyle.card}>
            <div className={blogStyle.cardImage}>
              <img src={blogImg3} alt='' />
            </div>
            <h2>MUST KNOW DEVOPS TOOLS IN 2022</h2>
            <div className={blogStyle.blogCaption}>
              <p>
                The best DevOps tools to start using today{' '}
                <span>Read More</span>
              </p>
            </div>
            <div className={blogStyle.profile}>
              <img src={profile} alt='profile' />
              <div className={blogStyle.profileInfo}>
                <h2>Micheal Jackson</h2>
                <p>November 29,2022.</p>
              </div>
            </div>
          </div>

          <div className={blogStyle.card}>
            <div className={blogStyle.cardImage}>
              <img src={blogImg1} alt='' />
            </div>
            <h2>MY JOURNEY WITH OPSPAD.</h2>
            <div className={blogStyle.blogCaption}>
              <p>
                If you're like me, managing servers can be alot. Well, till I
                discovered Opspad! <span>Read More.</span>
              </p>
            </div>
            <div className={blogStyle.profile}>
              <img src={profile} alt='profile' />
              <div className={blogStyle.profileInfo}>
                <h2>Joseph James</h2>
                <p>December 10,2022.</p>
              </div>
            </div>
          </div>

          <div className={blogStyle.card}>
            <div className={blogStyle.cardImage}>
              <img src={blogImg2} alt='' />
            </div>
            <h2>10 GREAT BOOKS FOR DEVOPS.</h2>
            <div className={blogStyle.blogCaption}>
              <p>
                Read these books to gain knowledge about how to build highly
                available applicantions without impacting the quality.
              </p>
            </div>
            <div className={blogStyle.profile}>
              <img src={profile} alt='profile' />
              <div className={blogStyle.profileInfo}>
                <h2>Zora Camsey.</h2>
                <p>December 19,2022.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={blogStyle.newsletter}>
        <div className={blogStyle.newsletterSub}>
          <h1>Subscribe to our newsletter</h1>
          <p>
            We want to hear from you. Let us know how we can help.We want to
            hear from you. Let us know how we can help.We want to hear from you.
            Let us know
          </p>

          <div className={blogStyle.newsletterEmail}>
            <input
              type='email'
              name=''
              id='newsletterEmail'
              placeholder='Email Address'
            />
            <button>Notify Me</button>
          </div>
        </div>
        <div className={blogStyle.newsletterImg}>
          <img src={newsLetterImg} alt='' />
        </div>
      </div>
    </div>
  );
};

export default Blog;
