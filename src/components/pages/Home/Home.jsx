
import { AsideNew } from '../../AuxComponents/forMain/AsideNew/AsideNew'
import { PrincipalNew } from '../../AuxComponents/forMain/PrincipalNew/PrincipalNew'
import { CarouselSlider } from '../../AuxComponents/forMain/Slider/Slider'
import { Header } from '../../Layouts/Header/Header'
import { Main } from '../../Layouts/Main/Main'





export const Home = () => {



  return (
    <div className='home w-full h-full p-2'>
        <Header>
            <h1 className="title text-white ">NauticalScope</h1>
        </Header>
        <Main>
          <div className='organizer flex flex-row'>
            <PrincipalNew/>
            <AsideNew/>
            </div>
            <CarouselSlider/>
        </Main>
    </div>
  )
}
