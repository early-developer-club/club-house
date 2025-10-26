export function ContactSection() {
  return (
    <section className="mt-20">
      <h2 className="text-xl font-bold text-black text-center mb-6">Contact</h2>

      <div className="max-w-2xl mx-auto text-center space-y-6">
        <div>
          <h3 className="text-lg font-semibold text-black">Email</h3>
          <a 
            href="mailto:contact@earlydevclub.com"
            className="text-lime-600 hover:text-lime-700"
          >
            contact@earlydevclub.com
          </a>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-black">GitHub</h3>
          <a 
            href="https://github.com/earlydevclub"
            target="_blank"
            rel="noopener noreferrer"
            className="text-lime-600 hover:text-lime-700"
          >
            github.com/earlydevclub
          </a>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-black">Discord</h3>
          <a 
            href="https://discord.gg/your-discord-link"
            target="_blank"
            rel="noopener noreferrer"
            className="text-lime-600 hover:text-lime-700"
          >
            Early Developer Club
          </a>
        </div>
      </div>
      
      <div className="mt-20 text-center">
        <div className="bg-gray-50 rounded-lg p-6 max-w-2xl mx-auto">
          <h3 className="text-lg font-semibold text-black mb-6">운영진 모집</h3>
          <p className="text-gray-600 text-sm">
            분야 관계없이 AI를 활용한 다양한 활동을 진행해보고 싶거나, 
            <br />
            커뮤니티에 기여하고 싶은 분들의 참여를 기다립니다.
          </p>
        </div>
      </div>
    </section>
  )
}
