import bottleDesk1x from '../../images/home/bottle-desk-1x.png';
import bottleDesk2x from '../../images/home/bottle-desk-2x.png';
import bottleTab1x from '../../images/home/bottle-tab-1x.png';
import bottleTab2x from '../../images/home/bottle-tab-2x.png';
import bottleMob1x from '../../images/home/bottle-mob-1x.png';
import bottleMob2x from '../../images/home/bottle-mob-2x.png';
import css from './HomeBottleImg.module.css';

const HomeBottleImg = () => {
  return (
    <div className={css.bottle}>
      <picture>
        <source
          srcSet={`${bottleDesk1x} 1x, ${bottleDesk2x} 2x`}
          media="(min-width:1440px)"
          height="548"
          width="738"
        />
        <source
          srcSet={`${bottleTab1x} 1x, ${bottleTab2x} 2x`}
          media="(min-width:768px)"
          height="386"
          width="518"
        />
        <source srcSet={bottleMob2x} media="(max-width: 767px)" />
        <img src={bottleMob1x} alt="bottle of water" width="280" height="208" />
      </picture>
    </div>
  );
};

export default HomeBottleImg;
