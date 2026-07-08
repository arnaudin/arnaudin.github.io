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

    The vertical scroll bar map replaces the traditional scroll bar and allows you to view a scaled version of the entire source code. When you place your cursor over the map, you can see a preview of the code.

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