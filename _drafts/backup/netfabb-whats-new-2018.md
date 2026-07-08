What's New in 2018.0 (June 2017)
================================

New Features and Enhancements
-----------------------------

### Netfabb

1.  Support Structure Improvements

    The latest release of Netfabb includes a number of updates to support structure generation. This includes the ability to recalculate support attachments, create angled block supports, edit support attachments, and edit supports in 2D among others. Refer to the [Working with Support Structures](https://help.autodesk.com/view/NETF/2018/ENU/?guid=GUID-EBFB1CE8-E322-47EC-B977-B3E76411F885 "Hold parts in place and mitigate thermal effects during printing") section of the help for more information about support structure creation.

2.  Visualize Simulation Results

    Netfabb now provides the ability to visualize displacement results from Autodesk® Netfabb® Local Simulation. This allows you to understand how the part will deform and quickly identify regions where the support structures may need to be adjusted.

3.  Lattice Commander

    The Lattice Commander integrates the functionality from Optimization Utility and Lattice Topology Utility to provide easier end-to-end workflows for latticed structures from design to production. You can import a mesh into Netfabb, generate a lattice structure from a surface mesh, generate a lattice mesh from a lattice structure, modify lattice structures by adjusting beam thickness and positioning, and merge and partition lattices.

4.  Part Orientation Module

    The part orientation module allows you to quickly select an orientation for your part from a list of heuristically determined suggestions based on the minimal amount of supports. Any projected support structures from the part are automatically reoriented when a new orientation is selected.

5.  Mesh Manipulation

    A new Quads remeshing type has been added.

6.  Labeling Module

    Updates to the Labeling module allow you to create [shield labels](https://help.autodesk.com/view/NETF/2018/ENU/?guid=GUID-91479B44-F671-49F8-8F59-EDE72A76E8D4) and define a default font family.

7.  Slice Commander Improvements

    The Slice Commander has been updated to allow you to [reorder parts in the slice list](https://help.autodesk.com/view/NETF/2018/ENU/?guid=GUID-EFD6A7BB-49EC-4074-B4DF-2912BFA68818), [visualize hatch directions](https://help.autodesk.com/view/NETF/2018/ENU/?guid=GUID-A9715DE4-169B-4D14-AB6F-4A687397BC68), [predefine automatic slice naming](https://help.autodesk.com/view/NETF/2018/ENU/?guid=GUID-34F378C3-BFD7-4DC0-8F8E-32FD8E79337F), and [split contours](https://help.autodesk.com/view/NETF/2018/ENU/?guid=GUID-FCF71D6B-5736-44C1-9665-F7D83517FAE5).

8.  Array Improvements

    The [array tool](https://help.autodesk.com/view/NETF/2018/ENU/?guid=GUID-90329B97-14D1-4151-B03C-FF0DCCD773F0) has been improved to allow you to easily create duplicates of your part along the positive or negative direction of the axis or around the centered original part. You can also define the spacing placed between the duplicated parts along each axis, where applicable.

9.  Machine Workspaces

    The following new machine workspaces have been added:

    -   Farsoon 271M
    -   Farsoon 121M
    -   Farsoon 403P
    -   Farsoon 252P
10. Open Recent Files

    The File menu now contains a list of the most recent files used in Netfabb. This list of recent files can help you quickly identify recent projects without the need to browse for your models.

11. Project Tree

    Coloring or textures on a part is now represented by an icon directly in the Project Tree, allowing quick access and toggling of visibility.

12. DPI Awareness

    Netfabb's UI received a technical upgrade that allows smooth display on 4k screens.

### Optimization Utility

1.  Export a Component

    You can now export a component created in Optimization Utility directly to Netfabb.

### Simulation Utility

1.  Interoperability with Netfabb

    The latest release of Netfabb provides greater interoperability between Netfabb and Simulation Utility. This includes the ability to import the build plate size and the number of lasers directly from the machine selected in Netfabb. This ability reduces the need to redefine these settings when your model is transferred to Simulation Utility.

2.  Improved Interaction with your Model

    Simulation Utility now provides greater control over your model. This includes the ability to:

    -   [Suppress parts](https://help.autodesk.com/view/NETF/2018/ENU/?guid=GUID-A386CDAE-FB85-497E-9387-265C4C230D66) to hide them from the simulation.
    -   [Remove parts](https://help.autodesk.com/view/NETF/2018/ENU/?guid=GUID-A386CDAE-FB85-497E-9387-265C4C230D66) imported into Simulation Utility.
    -   [Translate parts](https://help.autodesk.com/view/NETF/2018/ENU/?guid=GUID-902737F0-F1EB-4143-9A5D-AB5CD482C829) with the mouse or with precise numeric inputs.

3.  Solve on Linux Operating Systems

    You can now perform PRM and part-level simulations on Linux operating systems. This gives you the added flexibility to export solver input files directly from Simulation Utility and solve on a separate Linux machine.

4.  Mesh Controls

    The new [meshing capabilities](https://help.autodesk.com/view/NETF/2018/ENU/?guid=GUID-A4A94ADF-D88B-4385-8DA7-D197F1600E5F) give you enhanced control of the mesh size for your model. Choose between the default wall thickness meshing approach or the new layer based meshing approach. The new layer based approach allows you to specify the number of coarsening generations and the number of layers per element.

5.  Solve with Mulitple PRM Files

    You can now [assign PRM files](https://help.autodesk.com/view/NETF/2018/ENU/?guid=GUID-F7AF2673-86BC-4043-9841-057CC0AF3D43) to your model in three different ways:

    -   Uniformly for the entire model.
    -   Uniquely for parts and supports.
    -   Individually for each part and support.

    This added functionality allows you to use unique process settings for different regions of your model.

6.  Analysis Improvements

    [Analysis improvements](https://help.autodesk.com/view/NETF/2018/ENU/?guid=GUID-2D3DE1FD-6D4E-4DE6-9413-60E713B64956) include the ability to post-process stress results that were previously only available as a technology preview. In addition to these stress results, you can also examine plastic, equivalent plastic, and elastic strain results from your part-level analyses. You may also stop the part-level analysis if a recoater blade interference is detected.

7.  3MF Support

    The 3MF file type is now supported in Simulation Utility.

8.  Results Probe Improvements

    The [results probe](https://help.autodesk.com/view/NETF/2018/ENU/?guid=GUID-CF83278E-B904-4E43-80FD-6DD1C5FFEB91) functionality has been enhanced to allow a window selection of several points at once. This can significantly speed up post-processing of results.

### PowerShape Utility

1.  Flexistock and Superstructure Improvements

    PowerShape Utility now includes new tools that make it easier to create [flexistock](https://help.autodesk.com/view/NETF/2018/ENU/?guid=GUID-3B28670B-2A47-49E4-BD44-75FD657249A0) and [superstructures](https://help.autodesk.com/view/NETF/2018/ENU/?guid=GUID-7D7FD2D2-0D8D-4737-AE54-E0C57AE6679B). Additionally, you can drag creation points to move them within the view plane, making flexistock and superstructure creation easier and more intuitive.

2.  Exporting

    The[ export options](https://help.autodesk.com/view/NETF/2018/ENU/?guid=GUID-BF232D0A-C724-4937-BE4F-C131FB6C97F9) in PowerShape Utility have been simplified so they are easier to use.

3.  Options

    The title bar has been removed for this release. All options previously contained in the title bar are now available in the [Options panel](https://help.autodesk.com/view/NETF/2018/ENU/?guid=GUID-BB2C3CA7-8CE8-4466-BDF6-E0C3B6F060D5), which is accessible by selecting the Queue mode > Settings tab.

### Advanced Toolpath Utility

1.  Interoperability with Netfabb

    The latest release of Netfabb provides greater interoperability between Netfabb and Advanced Toolpath Utility. This includes the ability to use custom encrypted build processor archive (EBPA) files in Netfabb. Using the EBPA files directly in Netfabb can streamline your process of creating machine specific build data.

2.  JavaScript Debugging

    Advanced Toolpath Utility now provides debugging capabilities for the syntax of all script entry functions.

### Local Simulation

1.  Moving element coarsening/refining

    Moving adaptivity ([*ADPM](https://help.autodesk.com/view/NETF/2018/ENU/?guid=GUID-E5D0286D-F308-4094-8CFE-9C8EFB3FD93D)) can now be used with multiple layers ([*LFUS](https://help.autodesk.com/view/NETF/2018/ENU/?guid=GUID-7BBEFC63-C9D2-4BBF-A02C-91F0804D0BAA)).

2.  Build plate properties

    The [*PBSN](https://help.autodesk.com/view/NETF/2018/ENU/?guid=GUID-13FA3648-E309-4A46-91B6-42F367DCABB3) card was added to specify build plate properties for simulations with multiple PRM files.

3.  Loose element removal

    Loose element removal now removes solid elements floating on [*+PDR](https://help.autodesk.com/view/NETF/2018/ENU/?guid=GUID-51DDC13E-5A46-4A77-9F21-A5D64CF79AEC) powder elements.

4.  Log files now contain:
    -   Memory estimates for thermal and mechanical models.
    -   Initial angle, rotation angle, X size, Y size, and absorption efficiency. These values are also stored in the PRM files.
    -   Peak memory usage.
    -   Statistics for mesh preview volume vs STL volume and final activated mesh volume vs mesh preview volume.
5.  Off core pre-processing

    The [*OFC2](https://help.autodesk.com/view/NETF/2018/ENU/?guid=GUID-FF40FA3E-C63D-4A63-9948-2EA6992FFC70) and [*OFC3](https://help.autodesk.com/view/NETF/2018/ENU/?guid=GUID-099AA91A-5A2F-4E95-9372-6E014F609CB6) cards were added to save memory by keeping large arrays on disk. The initial values are set automatically based on required memory estimates. You can use the *NOFC keyword to override the automatic settings.

6.  Recoater tolerance

    A new argument was added to the [*RCTR](https://help.autodesk.com/view/NETF/2018/ENU/?guid=GUID-A66F5801-7AEB-497E-B683-3AD393E6E604) keyword to terminate the analysis after recoater interference.

7.  STL diagnosis

    STL diagnosis was added prior to voxel meshing to help identify non-oriented STL files and STL files with non-manifold (border) edges.

8.  Memory estimate

    The fast costing -f command line argument was improved to provide . an estimate of the memory required for a mesh preview.