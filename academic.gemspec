# frozen_string_literal: true

Gem::Specification.new do |spec|
  spec.name          = "alifalhasan-portfolio"
  spec.version       = "1.0.0"
  spec.authors       = ["Alif Al Hasan"]
  spec.email         = ["alifal.hasan@case.edu"]

  spec.summary       = "A custom Jekyll theme for my academic portfolio."
  spec.homepage      = "https://github.com/alifalhasan/alifalhasan.github.io"
  spec.license       = "MIT"

  spec.files         = `git ls-files -z`.split("\x0").select { |f| f.match(%r!^(assets|_layouts|_includes|_sass|LICENSE|README|CHANGELOG)!i) }

  spec.add_runtime_dependency "jekyll", "~> 4.2"
end