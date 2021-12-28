dep:
	@echo "Install dependencies required for this repo..."
	@yarn
	@yarn global add @blocklet/cli

test:
	@echo "Running test suites..."

build:
	@echo "Building the software..."
	@yarn build

bundle:
	@npm run bundle

include .makefiles/*.mk
