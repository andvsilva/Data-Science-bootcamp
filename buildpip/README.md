# Command line Interface in Python

In this package I build an example of a command line interface(CLI)
based on CLI from linux bash commands. The main proposal of this
package is to workaround how to create a package in python.


## How to install

```bash
pip install cli-python
```

## Usage

```bash
$ python                                                                                               3873ms 
Python 3.9.10 (main, Jul 10 2022, 21:54:43) 
[GCC 9.4.0] on linux
Type "help", "copyright", "credits" or "license" for more information.
>>> from clisrc import CommandLine
>>> cmd = CommandLine(cmdline='')
/usr/bin/zsh
>>> cmd.ls()
total 20K
4,0K drwxrwxr-x 3 andsilva andsilva 4,0K out 16 18:37 .
4,0K drwxr-xr-x 7 andsilva andsilva 4,0K out 16 18:27 ..
4,0K drwxrwxr-x 3 andsilva andsilva 4,0K out 16 19:40 clisrc
4,0K -rw-rw-r-- 1 andsilva andsilva 1,1K out 16 18:34 license.txt
   0 -rw-rw-r-- 1 andsilva andsilva    0 out 16 18:37 README.md
4,0K -rw-rw-r-- 1 andsilva andsilva  700 out 16 19:39 setup.py
>>> cmd.pwd()
The path where you are right now!
/home/andsilva/Desktop/cli-python
>>> 
```

## License
This project is licensed under the MIT License

## Author

[Andre Vieira Silva](https://andsilvadrcc.gitlab.io/my-web-page-andre-vieira/).