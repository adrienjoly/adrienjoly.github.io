.PHONY: serve build

default: serve

ruby:
	@echo "We assume that Ruby 2.7 and its bundler are already installed"
	# cf https://www.moncefbelyamani.com/how-to-install-xcode-homebrew-git-rvm-ruby-on-mac/
	@echo "E.g. $ chruby 2.7.8"

serve: ruby
	bundle install
	bundle exec jekyll serve

build: ruby
	bundle install
	rm -rf _site/
	bundle exec jekyll build
