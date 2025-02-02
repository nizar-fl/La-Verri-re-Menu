"use client"
import { useState } from "react";
import TopNav from "./mainComponents/topNav/TopNav";
import styles from "./Filters.module.css";
import "./MainCss.css";

export default function MainPage() {
  const [activeOption, setActiveOption] = useState('Drinks');
  const [activeFilter, setActiveFilter] = useState('All'); // State to track active filter

  const filters = ['All', 'Ice Coffee', 'Ice Tea', 'Hot Chocolate', 'Cafe Latte', 'Cappuccino', 'Americano', 'Mocha', 'Matcha Latte', 'Chai Latte'];
  return (
    <div>
        <TopNav />
        <div className="optionsContainer">
          <button
            className={`option ${activeOption === 'Drinks' ? 'active' : ''}`}
            onClick={() => setActiveOption('Drinks')}
          >
            Drinks
          </button>
          <button
            className={`option ${activeOption === 'Food' ? 'active' : ''}`}
            onClick={() => setActiveOption('Food')}
          >
            Food
          </button>
          <button
            className={`option ${activeOption === 'Breakfast' ? 'active' : ''}`}
            onClick={() => setActiveOption('Breakfast')}
          >
            Breakfast
          </button>
          <button
            className={`option ${activeOption === 'Chicha' ? 'active' : ''}`}
            onClick={() => setActiveOption('Chicha')}
          >
            Chicha
          </button>
            
          </div>
        <div className="grayLine"></div>
        <div className="filtersContainer">
          <div className={styles.filters}>
            {filters.map((filter, index) => (
              <button
                key={index}
                className={`${styles.filterButton} ${
                  activeFilter === filter ? styles.active : ""
                }`}
                onClick={() => setActiveFilter(filter)}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
       Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus molestiae, nulla ratione saepe temporibus natus exercitationem commodi provident a omnis in quisquam officia dicta placeat atque unde eaque delectus eligendi dolorem veritatis alias voluptatum labore libero consequatur. Eligendi, quam nisi fuga modi dolorem commodi ratione fugit praesentium eius, voluptate iure nam dolor aliquam, consequuntur officiis! Hic mollitia omnis, fugit rem ullam, vel asperiores beatae voluptates corrupti iusto commodi voluptas eius cumque soluta nostrum quos iste eos in excepturi obcaecati. Dolorem deserunt nisi tempora quae impedit cupiditate illum suscipit illo similique. Et eligendi, cum veniam fuga atque minima sunt id dignissimos corrupti placeat molestias nisi ab tempore eos rerum aspernatur delectus, fugit totam? Veniam tempore mollitia voluptates rerum dolor iure accusamus reprehenderit illum blanditiis alias nulla consectetur minima dolores ullam sint obcaecati suscipit consequuntur harum vel voluptatum quae, vero et? Dolores consectetur nostrum laudantium ipsum alias officia necessitatibus laborum, facilis dolore soluta minima doloribus vitae neque incidunt autem aliquam porro, sit odio assumenda quae. Earum dolore quam aliquam ipsa tempora. Dolores quod perspiciatis minus temporibus sunt perferendis praesentium beatae, a non impedit repudiandae veniam natus quasi itaque ducimus quidem. Excepturi rem quas ullam deleniti fuga, mollitia unde ipsa, dolorum ad fugit, explicabo ducimus. Ea tenetur sint magnam recusandae voluptatibus nemo eligendi vero commodi, saepe ullam! Exercitationem aut labore ducimus quibusdam officia nobis, deleniti quaerat maxime cum minima illum quidem mollitia rem placeat quae voluptatum, delectus odit nihil eveniet earum in magnam. Ad voluptas ducimus omnis quod accusamus tenetur, fugiat non ea rerum harum nostrum, et officiis tempore veritatis dolor nemo ratione quo dicta. Ipsum optio modi veniam maiores? Modi ipsam exercitationem eius nam deserunt at temporibus corrupti earum animi ad quas nulla voluptatibus, adipisci ut blanditiis, aperiam laboriosam unde quam quisquam ab quibusdam. Libero officia ipsam non accusamus impedit dolorum voluptatum eaque expedita? Dicta nobis, quis aperiam cumque aliquam ipsa assumenda mollitia cupiditate accusamus distinctio. Necessitatibus, sunt qui dolore illo, nesciunt, nulla nihil doloribus vero non beatae itaque? Vel minus, beatae maxime commodi praesentium esse distinctio! Atque voluptate in iste? Dolore maiores nobis veritatis aspernatur quasi repellendus odio voluptas quo, alias quis dicta ipsum iste? Nulla veritatis quas, incidunt est ducimus repudiandae alias. Id officiis earum iste ad officia dolore rem ducimus, omnis exercitationem asperiores repellat possimus magnam modi, libero sed. Voluptatum mollitia iste laboriosam possimus necessitatibus quod ipsum incidunt unde placeat asperiores obcaecati excepturi ducimus, similique eaque sapiente cum quis quaerat soluta, consequuntur distinctio illum eius maxime? Corporis provident a eaque ad, voluptate expedita, asperiores illo similique enim tempore placeat libero iste modi ratione vitae cupiditate cum? Et earum ullam illum quo modi nostrum, provident sunt vero beatae, minus dignissimos maiores a. Corrupti fuga fugiat minima ipsam cum cupiditate saepe, ut facere culpa voluptates iusto eius molestias minus beatae. Voluptas illo pariatur corrupti nostrum vel facere sapiente consectetur recusandae atque. Expedita dolores, debitis, adipisci, ipsum facere eaque mollitia alias omnis voluptates sed cumque laudantium quidem. Voluptatem dolor dicta quia aliquid aut, rerum ullam dolores dolore, est, unde tempora nihil. Dignissimos dolores iure porro exercitationem tenetur numquam velit laborum maiores magnam vel. Consectetur ratione minus animi sed quo aperiam laboriosam labore dolores. Corrupti possimus neque nobis earum, maiores vero facilis, velit beatae tenetur facere reprehenderit. Ex consequatur hic unde, dolorem maiores ut et, atque ab dicta quo laudantium quia, non assumenda libero dolores eius sed sunt vitae quae quod magnam dolor deserunt nam. Mollitia, pariatur inventore! Doloremque nemo harum, magnam at tempora ut minus odit quidem nam fuga labore obcaecati eveniet quod. Alias aspernatur voluptatum in libero? Nisi quasi expedita eligendi velit officiis ad optio sed obcaecati debitis enim quam harum molestiae, neque recusandae doloribus voluptatem consectetur nesciunt et suscipit perferendis esse quos? Minus optio ut, ratione amet maxime minima corporis iusto quam voluptatem numquam eveniet sunt accusantium quasi odit reprehenderit praesentium inventore sapiente vitae repellat velit, quas sed suscipit explicabo necessitatibus! Alias nam ipsum quaerat amet, possimus excepturi aut ex id nisi est earum illo neque hic voluptatum cumque totam quas inventore quis incidunt optio unde quo. Consequuntur voluptas optio ad atque quam facilis est a! Cum eum corporis ducimus quibusdam. Eum, ab! Fuga dolor ut quis placeat ipsa, vel sequi quas atque debitis tempore est, architecto pariatur vero, neque labore. Exercitationem vel facere nobis saepe laudantium. Quo officia quae atque magni rerum obcaecati modi, dolorem corrupti placeat ducimus soluta in mollitia architecto a vel fugit facere eum, omnis est! Tempora ad optio possimus facilis perferendis placeat dicta mollitia, hic deserunt iure odit adipisci recusandae architecto quo, repellendus nesciunt beatae maxime, reprehenderit saepe vel nihil inventore! Maxime reiciendis cumque quibusdam, reprehenderit libero quod neque aliquid harum ullam eum, modi, pariatur aperiam fugit fuga iure. Ducimus veniam animi mollitia distinctio debitis cupiditate obcaecati est aspernatur a consequuntur sapiente soluta corrupti voluptates, quae sunt? Ad laboriosam nesciunt fugit veniam quae molestiae obcaecati, amet doloremque illo recusandae adipisci suscipit voluptatum quidem itaque voluptate optio est necessitatibus. Quidem, id? Nobis explicabo voluptate eligendi rem consequuntur fuga veritatis! Blanditiis laudantium facilis commodi delectus adipisci. Itaque modi incidunt dolorum praesentium voluptate. Iste tenetur incidunt consequuntur cumque id praesentium quisquam quo, obcaecati itaque omnis quos aspernatur nulla cupiditate tempore laboriosam facilis explicabo. Dolores libero nostrum odio velit ab accusamus vel similique reprehenderit possimus commodi nisi rerum exercitationem asperiores harum vitae voluptates quod quam maxime voluptatem, autem facilis dignissimos ut fugit saepe. Odit tempora neque deserunt excepturi sint quas sequi provident quae illum! Explicabo placeat enim perferendis quisquam error sint dignissimos consequuntur non deleniti facilis eaque accusantium, eligendi architecto ab blanditiis, pariatur qui asperiores porro delectus totam, amet repudiandae repellat? Dicta dolore quae ullam ratione minus repudiandae autem, nesciunt id est aliquid nostrum, in dignissimos iusto vero saepe maxime vitae officiis eius eligendi illum! Quasi ducimus consectetur officia ipsam quo, ea quis ratione sunt veritatis ipsa laudantium explicabo voluptatum minima voluptates vel excepturi dolorem qui ad! Vel odio reprehenderit laudantium corrupti ducimus nisi voluptate porro aperiam ad maxime. Dolor magni laborum modi ex ea at labore et voluptatum aut quaerat similique, repellat nam qui doloremque odit pariatur veniam?
    </div>
  )
}
