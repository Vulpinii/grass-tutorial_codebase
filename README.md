# Grass tutorial code base
Code used as the basis for the grass modeling tutorial. This program displays stitches that serve as the basis for the blades of grass.

## Useful links
- Tutorial in french : https://vulpinii.github.io/tutorials/grass-modelisation/fr/
- Tutorial in english : https://vulpinii.github.io/tutorials/grass-modelisation/en/
- The final code : https://github.com/Vulpinii/grass-tutorial_finalcode

## Building
#### On Linux
**Prerequisite**: CMake

To build this program, download the source code using ``git clone https://github.com/Vulpinii/grass-tutorial_codebase`` or directly the zip archive.

Then following these commands:
```shell script
mkdir build
cd build
cmake -DCMAKE_BUILD_TYPE=Release ..
make -j
./program
```

#### On Windows
[instructions coming soon]
