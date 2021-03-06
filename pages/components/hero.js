import Button from './button'
import Paragraph from './paragraph'
import Title from './title'

export default function Hero() {
  return (
    <div>
      <div className="min-h-screen py-2 bg-hero bg-cover bg-center">
        <div className="flex mt-8 items-center justify-center">
          <div className="text-center mt-8">
            <Title label="Representing Drone Light" weight="bold" />
            <Paragraph weight="light" align="center" className="m-auto w-3/4" label="Look up the  sky and beautiful world with simple navigation.Just record anmd get a lot memories to share, lighlty and fast like a lightning" />
            <Button label="GET NOW" />
          </div>
        </div>
      </div>
    </div>
  )
}
