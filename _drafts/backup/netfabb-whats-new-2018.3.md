What's New in 2018.2 (December 2017)
====================================

Announcements
-------------

1.  New and updated features for this release are marked with ![](https://help.autodesk.com/cloudhelp/2018/ENU/NETF/images/GUID-BD0B47E8-E83E-4070-A191-B64262EAD38D.png) in the online help. Also, use the search term `2018.2` to find the help topics that correspond to the new features.
2.  On November 13^th^, our blog relaunched under the new address at <http://blogs.autodesk.com/netfabb/>. Be sure to update your bookmarks!

New Features and Enhancements
-----------------------------

### Netfabb

1.  User Interface

    Netfabb's icons have received a polish and are now looking sharper than ever. Some of the dialogs have been straightened out, too.

2.  Parametric Parts

    Parametric part support has come out of Tech Preview and is now the default mode for opening CAD files:

    -   Load CAD parts natively without having to permanently fixate their shape into a triangle mesh.
    -   Re-tessellate them whenever you need to match the triangle resolution demand of your particular task, such as generating supports or slicing.
    -   Perform tasks such as scaling and rotation natively.
    -   Utilize face group information during coloring, calculating orientations, or applying supports.
    -   Export CAD parts to STEP, IGES, or SAT.
3.  Monte Carlo Packer

    You can now use the Monte Carlo Packer to define no-build zones and packing priority for parts.

4.  A360 Cloud Integration

    With the new A360 Cloud Integration, you can save and load *FABBPROJECT* files to and from your A360 file storage, and generate a URL you can share with people to examine your project online.

5.  Editable Supports for FFF Machine Workspaces

    When working with FFF machine workspaces, choose what clusters should or should not receive support structures when calculating print data.

6.  Support Module Expansion

    With the updates to the support module, you can:

    -   Utilize face group information during cluster detection.
    -   Use the full cluster detection for the **Down-oriented point bar support** action. You can now apply point bars to a part and still very small clusters, such as on embossed text, from having bar supports added.
    -   Configure solid **Bar supports** to have elliptical cross-sections.
    -   Configure structured **Polyline supports** to have solid bases to improve strength for supports spanning greater Z distances
7.  Report generation:
    -   Support for Pentaho reports has been updated from 7.0 to 7.1. To migrate your custom Pentaho templates for Netfabb, open and save them using the new Pentaho Report Designer.
    -   A new analysis value is available for creating reports: Support volume. Add `NETFABB_PART_SUPPORTVOLUME` to your templates. (Pentaho-type reports only)
8.  Tech Preview - Density Fields for Supports

    With this feature, which has been added as a new Technology Preview, you can define and adjust zones where support structures may be lightened or must be or reinforced to meet simulation results.

9.  Tech Preview - Lattice Commander:
    -   The Lattice Commander section of the project tree is now fully saved in the *FABBPROJECT* file.
    -   More actions support Undo now.
    -   Improved GUI and workflow
10. Tech Preview - Lattice Assistant:
    -   Now available in Premium and Ultimate with adjusted set of features each.
    -   Improved GUI and features

### Simulation Utility

1.  Post-processing

    The animation controls on the Results tab have been updated to allow for improved navigation of the simulation's time history while viewing results. You can now use the Index field to control the specific increment for which you want to view results. You can also use the Loop button to continuously animate the results throughout the time history.

2.  Results Timeline

    A timeline is available when viewing results of the simulation. When you hold your mouse over the timeline, it displays information about the active manufacturing process (printing, cooldown, plasticity, heat treatment, substrate removal, and support removal), the time, the increment, and the active layer, where applicable. Each process in the timeline is color-coded for easy identification.

3.  Structure Type

    The contour plot that displays the type of structure was expanded. Simulation Utility now identifies the following structure types:

    -   0 - Build Plate
    -   1 - Powder
    -   2 - Part
    -   3 - Homogenized Part
    -   4 - Support Structure
    -   5 - Failed Support Structure
4.  Recoater Clearance Contour Plot

    A new result was added allowing you to create contour plots of the recoater clearance.

5.  Result Probing

    The Results Probe functionality now allows you to identify minimum and maximum values on the model for the selected contour result. Additionally, the time and the coordinate location of the minimum and maximum values is reported. The results probe dialog was also updated to allow you to display results for all result types or only for the currently displayed result.

6.  PRM Files

    Several new PRM files are available. These PRM files can be used for both stress and distortion analyses and lack of fusion and hotspot analyses.

7.  Navigation Controls

    The mouse navigation controls have been updated to match those found in Netfabb. These updates affect the rotating, translating, and zooming of a model.

### Local Simulation

1.  Solver Keywords

    A number of new solver keywords have been added or updated:

    -   *ORES: Writes restart files. Used in conjunction with *REST to restart a partially completed simulation.
    -   *REST: Reads in restart files. Used in conjunction with *ORES to restart a partially completed simulation.
    -   *NMAT: Allows more than 100 materials.
    -   *NMTT: Allows more than 100 rows of material data.
    -   *NTFE: Used to enable Netfabb's extended repair functionality.
    -   *NTFT: Used to control the Netfabb repair tolerance.
    -   *FIxC: Constrains degrees of freedom on a circle.
    -   *FSRD: Removes spring elements after the substrate is removed from the machine.
    -   *ZDWL: Adds extra dwell time at a given Z coordinate.
    -   *ORCS: Used to log the maximum downward deflection.
    -   *STOL: The underlying algorithm was updated to preserve the angles between faces.
2.  Line Plot Utility

    The line plot post-processing tool accessible from the command line now reads an input file instead of running interactively.

3.  Geometry Repair

    Geometries with non-manifold edges are automatically repaired before the simulation begins.

4.  PRM Files

    When using multiple PRM files for a simulation, we've added a check that ensures the material is the same across the different PRM files. Only the processing parameters, stress and distortion data, and lack of fusion data can vary for analyses that use multiple PRM files.

5.  Undeformed Z Height

    The recoater log now includes the undeformed z height.

6.  Minor Updates

    Additonal minor updates include the following bug fixes:

    -   Fixed issue with integer overflow in mesh memory estimate.
    -   Fixed issue with calculation of the process time.
    -   Fixed issue in DED simulations in which the bottom of the substrate was unnecessarily refined.

### PowerShape Utility

1.  Collaborating with Shared Views

    If you are a subscriber, you can now use [Shared Views](https://help.autodesk.com/view/NETF/2018/ENU/?guid=GUID-03F01537-BD92-46F6-81F5-6B2839ED6784) to collaborate online with people you're working with.

### Advanced Toolpath Utility

1.  Vertical Scroll Bar Map

    The vertical scroll bar map replaces the traditional scroll bar and allows you to view a scaled version of the entire source code. When you place your cursor over the map, you can see a preview of the code.What's New in 2018.3 (March 2018)
=================================

Announcements
-------------

1.  In January, we lowered the price of the Standard subscription from $1000 per year to $220 per year!
2.  New and updated features for this release are marked with ![](https://help.autodesk.com/cloudhelp/2018/ENU/NETF/images/GUID-DC135751-2EDB-4AB8-A1C5-94F80C915358.png) in the online help. Also, use the search term `2018.3` to find the help topics that correspond to the new features.

Netfabb
-------

1.  Converting meshes to parametric parts

    Netfabb now has the ability to convert meshes into BREP parametric models.

    ![](https://help.autodesk.com/cloudhelp/2018/ENU/NETF/images/GUID-227DC0D3-8CB6-4441-8B25-E14E2C33246A.png)

    BREP patches are highlighted during the conversion

2.  Remeshing

    An new remeshing algorithm has been added to provide adaptive remeshing, maintaining intricacies where needed while saving on triangles where the surface is less detailed.

    ![](https://help.autodesk.com/cloudhelp/2018/ENU/NETF/images/GUID-08E8B9DE-4188-4842-BF1A-DB3A89EBE500.png)
3.  General user interface changes
    -   The icon update has been completed.
    -   A **![](https://help.autodesk.com/cloudhelp/2018/ENU/NETF/images/GUID-25DEB24D-BB28-440B-A9B0-AA18E7F6BCEB.png) Save Project** button has been added to the toolbar.
    -   A vertical ruler has been added. Its visibility can be toggled in the settings.
    -   When resetting the window layout, you can now choose between three default layouts, **![](https://help.autodesk.com/cloudhelp/2018/ENU/NETF/images/GUID-88BE8E6F-2613-4735-B96F-1FAEAFDA7EBC.png) Default**, **![](https://help.autodesk.com/cloudhelp/2018/ENU/NETF/images/GUID-0AD7CD67-831C-485C-BE2F-25B324BC12C8.png) Classic**, and **![](https://help.autodesk.com/cloudhelp/2018/ENU/NETF/images/GUID-F3134CAC-70D4-4D41-A3FE-458E0B0918F5.png) Center**
    -   We have unified the mouse controls related to zoom and the brush functionality in the areas that make use of it. You will now always zoom with the mouse wheel, regardless whether you are pointing at a mesh or at empty space in the display. To change the brush size while using the mouse wheel, hold **Ctrl**.
4.  Latticing
    -   A new option in **Prepare > ![](https://help.autodesk.com/cloudhelp/2018/ENU/NETF/images/GUID-E53392B2-75B7-43E2-B5BB-8281E9FF259C.png) Manage Supports** is available to load bar supports, with its anchors and bars, directly into the Lattice Commander as a lattice of nodes and beams.
    -   The visibility status of bodies in the Lattice Commander is now stored in the FABBPROJECT.
    -   A thickness gradient can be applied across a lattice, changing the thickness of beams gradually between two arbitrary points in the lattice

    Play Video

5.  Hardware support: 3Dconnexion SpaceMouse® Family

    Netfabb now understands SpaceMouse input for manipulating the camera in the 3D display as well as a series of hotkey functions.

6.  Supports
    -   Angling can be added to and adjusted for multiple support entities at once.
    -   Solid polyline walls can now have fully pyramidal conicity applied to their top and bottom connections for easier breakaway:

        ![](https://help.autodesk.com/cloudhelp/2018/ENU/NETF/images/GUID-28616824-0F24-4D37-AEAA-8BB8A65EEADA.png)

    -   Solid polyline walls can now have rounded ends.
    -   Support structures terminating at the platform can now be toggled to be hidden to reveal structures that terminate on part surfaces. This can be used to easily remove supports that have been generated inside cavities if they are undesired.
    -   In the project tree, lattices can be dragged from **![](https://help.autodesk.com/cloudhelp/2018/ENU/NETF/images/GUID-ACFCB4BC-92D0-4507-90F2-27CF5D2DC542.png) Lattice Commander** directly into a loaded support module to generate bar support structures from the lattice.
    -   Density maps can be generated from simulation results: Apply the *von Mises* stress information in the computation of a spacial map of factors ranging 0.2≤1.0≤4.0 to modify the thickness of supports.
    -   The buttons **Apply Support** and **Run Support Script** are no longer confined to the **Analysis** tab, and have been separated to their own section underneath the support module tabs in the context area so that you can use them regardless which tab is currently active.
    -   The frame used to display a 2D view for editing existing supports is now detachable and can be placed separately on the desktop through the **System** menu.
7.  Measurements
    -   The UI has been reworked. The four individual measurement tabs have been condensed into one, and to select the desired measurement, you pick it from the dropdown menus of the individual selection tools.
    -   You can now measure angles against the cardinal planes of the build room.
    -   More options for individual measurement labels allow to switch between radius and diameter to display, and to display only components of the full measurements.
    -   We made more points for snapping available: You can now use the clip planes to set custom snapping, for instance to measure the distance to a particular point on a triangle edge.

    ![](https://help.autodesk.com/cloudhelp/2018/ENU/NETF/images/GUID-A5CADE55-AF68-499F-99A8-A36A4FEF6650.png)

    Measuring the distance between two points snapped to edges where the Z clip plane crosses them

8.  Texture & Color
    -   The frame used to display a 2D view for aligning a texture on a part is now detachable and can be placed separately on the desktop through the **System** menu.
9.  Monte Carlo Packer
    -   A new tab has been added to the dialog that provides an overview of the affected parts. In here, you can set packing priority, rotation permission, and the no-build-zone status of single parts or multiple parts at once, and also see the need of repair and the volume of each part.
10. Machine Workspaces
    -   Netfabb now supports loading the same machine model multiple times.
    -   Machine workspaces now load at the top of the project tree, not at the bottom.
    -   The icon update has been completed.
    -   The GUI for the powder bed machines has been reworked to streamline usage and to make access and visualization of simulation easier.
    -   The slice and toolpath preview in machine workspaces that make use of EBPA buildstyles has been streamlined and is now significantly faster. In addition, buildtime estimations are improved.
    -   A new workspace for the Form 2 by Formlabs is now available in Netfabb Standard, with access to SLA supports, lattice assistant and perforation tools.
11. Slicing

    Extensive work has gone into providing more EBPA buildstyles and more comfortable use of them.

    The slice and toolpath preview of EBPA-buildstyle output has been streamlined and is now significantly faster.

12. Cross-component and Cross-product improvements

    Although still in Tech Preview, loading simulation results directly into Netfabb has become even more useful.

    -   In addition to modifying supports and generating color information, Netfabb is now capable of generating distorted or compensated mesh and parametric parts itself, useful to counteract distortion from thermal effects during printing.

Simulation Utility
------------------

1.  Two product formats introduced
    -   **Simulation Utility LT** is a lightweight simulation interface for running limited-complexity, part-level powder bed simulations locally with a license of Netfabb Ultimate on the Cloud, or part-level powder bed models of unlimited complexity on the Cloud, with an installation of either Netfabb Premium or Ultimate.
    -   **Simulation Utility** is an industrial-scale simulation product without limitations on mesh size or complexity. Features include generation of custom PRM files, local solving, and capability to run directed energy deposition simulations as well as the part-level powder bed type. This is a stand-alone product sold as Local Simulation.
2.  New *Getting Started* window provides convenient access to tutorials and recent files.

    ![](https://help.autodesk.com/cloudhelp/2018/ENU/NETF/images/GUID-190B9D86-631E-4378-813B-4E33BCEEDE94.png)

3.  Expanded PRM file controls
    -   Simulation Utility users creating PRM files can now encrypt the processing parameters and material properties. Controls are also provided for thermal and mechanical model numeric relaxation, as well as powder property scaling factors.
    -   Multiple combined type PRM files of the same material can be used together in part-level simulations.
4.  Improved Operating Conditions controls
    -   The Uniform Heat Loss option has new settings for Heat loss coefficient and Ambient temperature.
    -   The Conduction to Loose Powder option provides manual control of powder property scaling factors: thermal conductivity, specific heat, elastic modulus, and emissivity
5.  Heat Treatment validity checks

    Time and temperature values entered for the heat treatment process are checked to ensure they are valid and provide a realistic time-temperature curve. Unacceptable values are disallowed or reported in error messages.

6.  Refined Memory management

    Users can now chose how to best make use of their system resources by controlling the extent to which Simulation Utility distributes the solution matrices between writing to the hard drive and RAM.

7.  Result writing frequency

    Results can be written less frequently than the default option of every increment, which can conserve disk space.

8.  Additional Mesh Settings controls

    Maximum adaptivity levels can be set to enforce finer mesh settings of the build plate.

9.  Post-processing enhancements
    -   Results Probe has been made compatible with the Clipping function, and has improved performance for large selection sets.
    -   Plot Settings changes now wait for user input before updating the interface.
10. Notifications
    -   A disk check is now performed at the outset of every simulation that warns user if they are running on a disk type that can degrade solver performance.
    -   Users are notified whenever critical warnings or errors are issued during the simulation.
11. ASCII result files

    Simulation result files <project>.geo, .geoc, and .ens can be output in ASCII format for use in custom optimization routines, by means of a single check box in Solver Settings.

12. More tutorials

    The 21 Tutorials for this product include new exercises on running simulation batches (Tutorial 11) and adjusting mesh settings to work within the complexity limits of Simulation Utility LT (Tutorial 21).

Local Simulation
----------------

The following new solver keywords were added:

-   *IOBN: Disables the automatic disk check at the beginning of each simulation.
-   *OOPP: Writes only the post-process increments of part-level powder bed simulations.
-   *STLC: Assigns a different volume fraction for interfaces between part and support structure, to account for teeth-like connections.
-   *UNIO: Enables automatic meshing of STL self-intersections.
-   *PBCP: Specifies the convection value and sink temperature for the sides of the powder during each part-level powder bed simulation increment.
-   *PBCT: Specifies the convection value and sink temperature for the top of the part and powder, if included, during each part-level powder bed simulation increment.
-   *PCSS: Specifies the convection value and sink temperature for the sides of the substrate or build plate during each part-level powder bed simulation increment.
-   *NBLT: Mimics the mechanical constraints of a powder bed build plate being simply supported on the build elevator without being restrained by bolts.

Common errors and warnings have been entirely re-written for clarity, and a new set of critical warnings has been added to inform users about major problems with simulations such as PRM defects, lack of convergence, and potentially problematic settings.

PowerShape Utility
------------------

1.  Simulating parts and fixtures
    -   A **Simulation** tab has been added to the **Options** dialog to let you choose which simulation product is used when you simulate parts and fixtures. Now choose between Simulation Utility LT or Simulation Utility.

Advanced Toolpath Utility
-------------------------

General Improvements:

-   A new option to execute hatch filling across several shapes at once provides faster toolpath generation.
-   Improvements on the test platform export

New script functions:

-   Convert hatching data into segments which are rendered separately in multiple passes
-   Hatching in multiple passes
-   Use grid of blocks to order hatching data
-   Use interval to divide hatching data without splitting segments
-   Flip ordering of hatching data
-   Split long hatching segments

2.  New Script Functions

    A number of new script functions have been added:

    | Function | Description |
    | --- | --- |
    | `bsIsland.setRandomStartPoint` | Assign random start points to islands. |
    | `bsHatch.setRandomStartPoint` | Assign random start points to hatches. |
    | `bsModelData.setTrayAttribute` | Write tray attributes to the layer stack. |
    | `bsModelData.getTrayAttribute` | Read tray attributes from the layer stack. |
    | `bsIsland.fixIntersections` | Fix intersections and self-intersections in islands. |
    | `bsPathSet.clipKeepPolylineOrder` | Clip function that keeps the original polyline path order. |

3.  EBPA Calculations

    The following EBPA calculations were added:

    -   Offset Fill Pattern
    -   Radial Hatch Pattern
    -   Open Contour Offset
    -   Sort Demonstration