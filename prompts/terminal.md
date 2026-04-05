- chatgpt was used to make this (april 4)
- terminal course is already in place but super messy and idk if it support multiple shells
- i'm giving this to qwen 3.6 plus to see what it can do

We are working on improving the terminal course.

Please use the existing writing style and tone, in addition to the CONTENT-PREFERENCES.md file.

By the end, a learner should be able to:

- navigate the filesystem confidently
- understand absolute vs relative paths
- read and write commands without fear
- inspect, create, move, copy, and delete files safely
- use shell features like pipes, redirection, quoting, and expansion
- search through files and command history efficiently
- edit config files and customize their shell
- understand processes, permissions, and environment variables
- chain tools together into useful workflows
- write basic shell scripts
- use the terminal as a serious daily tool

Can you make sure that a reader will understand those fundamentals after reading through the course?

⸻

Please ensure that the course covers the following items. Find a way to integrate them into the course. The course caters to zsh and bash / Unix shells first, but for every command that is different in PowerShell or cmd, also provide the PowerShell and cmd version in a callout.

⸻

Fundamentals

- What the terminal is
- terminal emulator
- shell / different types of shells
- operating system
- What happens when you type a command
- Paths as addresses
- Why spaces and special characters matter
- Commands as programs with inputs/options/outputs

⸻

Filesystem navigation and paths

This is the single most important beginner skill.

Topics

- pwd
- ls
- cd
- root directory
- home directory
- absolute paths
- relative paths
- . and ..
- ~
- hidden files
- tab completion
- case sensitivity
- trailing slashes

⸻

Command syntax and reading commands

A lot of terminal fear comes from not being able to visually parse commands.

Topics

- General command shape:
- command
- subcommand
- flags/options
- arguments

- Examples:
- ls -la /tmp
- git commit -m "message"
- python script.py input.txt

- Short flags vs long flags
- Positional arguments
- Ordering conventions
- How to read manpages/help output
- Common syntax patterns

⸻

Working with files and directories

This is where terminal use becomes useful.

- touch
- mkdir
- cp
- mv
- rm
- rmdir
- recursive operations
- force flags
- previewing before destructive actions
- glob patterns like \*.txt

⸻

Viewing and inspecting file contents

A terminal user should be able to inspect data quickly.

Topics

- cat
- less
- head
- tail
- wc
- file
- stat or equivalent
- line endings, plain text vs binary
- reading logs
- following logs with tail -f

⸻

Search and discovery

This is where the terminal starts to feel powerful.

Topics

- find
- grep
- which
- whereis or platform equivalents
- locate if available
- searching by name vs by contents
- recursive search
- case sensitivity
- regular expression basics
- filtering output

⸻

Permissions, ownership, and executables

This is essential for real-world terminal use.

Topics

- read/write/execute permissions
- user/group/other
- chmod
- chown
- executable files
- shebangs
- why ./script is needed sometimes
- PATH lookup
- file ownership
- sudo basics

⸻

Environment and shell configuration

This is how someone moves from user to power user.

Topics

- environment variables
- echo $VAR
- export
- PATH
- shell startup files
- .zshrc
- .bashrc
- .bash_profile
- .profile
- aliases
- shell functions
- prompt customization
- persistent config vs current session

Must understand

- environment variables shape command behavior
- startup files control shell behavior
- aliases are convenience, not magic
- PATH changes what programs are found

⸻

Editing and scripting

The terminal becomes much more useful once the learner can automate repetitive work.

Topics

- nano for accessibility
- vim basics for literacy
- basic shell scripts
- safe scripting habits
- making scripts reusable
